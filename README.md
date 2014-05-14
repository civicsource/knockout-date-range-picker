#Knockout Inline Confirm Binding

> A simple knockout binding that allows you to select a date range.

##Install with [Bower](http://bower.io/)

```
bower install knockout-date-range-picker
```

Then add `knockout-date-range-picker.js` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to a button or a link.

###Date Range Picker
```html
<div class="txt-date" data-bind="datePicker: { start: startDate, end: endDate, allowFutureDates: false, allowTodayStartDate: false }">
```

The browser will not navigate to the `/remove` link until the user confirms the action.
