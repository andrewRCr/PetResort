import { Visit } from "../models/visit.model";
import { addWeeks } from "date-fns";

/*
===========================================================================
refreshDemoVisitDates.ts
- runs once on app startup (after DB connection)
- checks if demo "upcoming" visit dates have gone stale (fallen into the past)
- if so, shifts all current + upcoming visit dates forward to restore accuracy
- idempotent: no-op when dates are already fresh
===========================================================================
*/

const refreshDemoVisitDates = async () => {
	const now = new Date();

	// check for stale upcoming visits (should be future, but startDate is past)
	const staleUpcoming = await Visit.find({
		checkedIn: false,
		checkedOut: false,
		startDate: { $lt: now },
	});

	if (staleUpcoming.length === 0) {
		return; // dates are fresh
	}

	// find the earliest stale date to calculate shift needed
	const earliestStale = staleUpcoming.reduce(
		(earliest, visit) =>
			+visit.startDate < +earliest ? visit.startDate : earliest,
		staleUpcoming[0].startDate
	);

	// calculate weeks to shift: enough to put earliest date ~1 week from now
	const msPerWeek = 7 * 24 * 60 * 60 * 1000;
	const weeksStale = Math.ceil(
		(now.getTime() - new Date(+earliestStale).getTime()) / msPerWeek
	);
	const weeksToShift = weeksStale + 1;

	// shift all current and upcoming visits by the same amount
	const activeVisits = await Visit.find({
		$or: [
			{ checkedIn: true, checkedOut: false }, // current
			{ checkedIn: false, checkedOut: false }, // upcoming
		],
	});

	for (const visit of activeVisits) {
		const newStartDate = addWeeks(+visit.startDate, weeksToShift);
		const newEndDate = addWeeks(+visit.endDate, weeksToShift);
		await Visit.findByIdAndUpdate(visit._id, {
			$set: { startDate: newStartDate, endDate: newEndDate },
		});
	}

	console.log(
		`Refreshed ${activeVisits.length} demo visit dates (shifted ${weeksToShift} weeks forward).`
	);
};

export { refreshDemoVisitDates };
