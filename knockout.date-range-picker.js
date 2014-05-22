(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout", "lodash", "moment", "jquery.ui/datepicker"], factory);
	} else {
		// Browser globals
		factory($, ko, _, moment);
	}
}(this, function ($, ko, _, moment) {
	ko.bindingHandlers.dateRangePicker = {
		init: function (element, valueAccessor) {
			$(element).find('.startDate').datepicker();
			$(element).find('.endDate').datepicker();

			element.updateMasks = _.debounce(updateMasks, 100);
		},
		update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());
			var endDate = ko.utils.unwrapObservable(valueUnwrapped.end);
			var startDate = ko.utils.unwrapObservable(valueUnwrapped.start);
			var allowFutureDates = true;
			var allowTodayStartDate = true;

			if (valueUnwrapped.allowFutureDates !== undefined) {
				allowFutureDates = valueUnwrapped.allowFutureDates;
			}

			if (valueUnwrapped.allowTodayStartDate !== undefined) {
				allowTodayStartDate = valueUnwrapped.allowTodayStartDate;
			}

			element.updateMasks.call(element, startDate, endDate, allowFutureDates, allowTodayStartDate);
		}
	};

	function updateMasks(startDate, endDate, allowFutureDates, allowTodayStartDate) {
		var startDatePicker = $(this).find('.startDate').first();
		var endDatePicker = $(this).find('.endDate').first();
		var now = new Date(Date.now());
		if (!allowFutureDates) {
			var futureDateMask = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
			startDatePicker.datepicker('option', 'maxDate', futureDateMask);
			endDatePicker.datepicker('option', 'maxDate', futureDateMask);
		}

		if (!allowTodayStartDate) {
			var todayDateMask = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0, 0);
			startDatePicker.datepicker('option', 'maxDate', todayDateMask);
		}

		if (endDate) {
			if (moment.isMoment(endDate)) {
				endDate = endDate.toDate();
			}
			var endDateMask = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 1, 0, 0, 0, 0);
			startDatePicker.datepicker('option', 'maxDate', endDateMask);
		}
		else if (allowFutureDates) {
			startDatePicker.datepicker('option', 'maxDate', null);
		}

		if (startDate) {
			if (moment.isMoment(startDate)) {
				startDate = startDate.toDate();
			}
			var startDateMask = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, 0, 0, 0, 0);
			endDatePicker.datepicker('option', 'minDate', startDateMask);
		}
		else {
			endDatePicker.datepicker('option', 'minDate', null);
		}

	}
}));
