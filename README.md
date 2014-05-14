#Knockout Date Range Picker Binding

> A simple knockout binding that allows you to select a date range.

##Install with [Bower](http://bower.io/)

```
bower install knockout-date-range-picker
```

Then add `knockout-date-range-picker.js` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to a div.
You can bind a start date or end date for masking ranges allow dates in the future or toggle allowing today as a start date by using the arguments in the binding example below.

###Date Range Picker
```html
<div data-bind="datePicker: { start: startDate, end: endDate, allowFutureDates: false, allowTodayStartDate: false }">
  <input class="with-datepick startDate" data-bind="value: startDate" placeholder="Start Date" />
	<input class="with-datepick endDate" data-bind="value: endDate" placeholder="End Date" />
</div>
```

