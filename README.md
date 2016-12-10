# jQuery Slide-Box Plugin
A jQuery plugin to accomplish an elegant need: putting a UI or DOM element inside a box, and hiding or showing it with the slide effect; obviously, the hiding part will work partially, in the measure specified by options (letting a part of the target element visible).
## Getting started
Put your target element in a container div, make sure container div is filled completely by the target element, and do this call when you want to hide the target element:
```
$("containerdiv").slideBox("hide");
```
or
```
$("containerDiv").slideBox(); // Because "hide" is the default action
```
Instead, call the following statement when you want it showed:
```
$("containerDiv").slideBox("show")
```
