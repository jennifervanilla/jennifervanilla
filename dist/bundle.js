(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var theme = document.querySelector('.theme');
console.log('theme: ', theme);
var title = document.getElementById('jv-title');
var arrow1 = document.querySelector('.icon-arrow');
var arrow2 = document.querySelector('.icon-arrow--down');
var verticalNav = document.querySelector('.js-vertical-nav');
var video = document.querySelector('.video');

var arrow1Rotate = false;
var arrow2Rotate = false;

var makeNavListeners = function makeNavListeners() {
	var items = Array.from(document.querySelector('.nav-main__list').querySelectorAll('.nav-main__list-item'));

	items.forEach(function (li) {
		var id = li.id || null;
		li.addEventListener('click', function () {
			// updateTheme();
			if (!arrow2Rotate) {
				arrow2.classList.add('icon-arrow--down--rotate');
				verticalNav.classList.add('nav--show');
				arrow2Rotate = true;
			}

			var target = document.getElementById('a-' + id);
			console.log('scrollY: ', window.scrollY);
			target.scrollIntoView({ behavior: "smooth" });
			console.log('scrollY: ', window.scrollY);
		});
	});
};

var makeArrowListeners = function makeArrowListeners() {
	arrow1.addEventListener('click', function (event) {
		// updateTheme();
		var action = !arrow1Rotate ? 'add' : 'remove';
		var horizontalNav = document.querySelector('.js-horizontal-nav');
		event.target.classList[action]('icon-arrow--rotate');
		horizontalNav.classList[action]('nav-main__list--show');
		video.classList[action]('video--show');
		arrow1Rotate = !arrow1Rotate;
	});

	arrow2.addEventListener('click', function (event) {
		// updateTheme();
		var action = !arrow2Rotate ? 'add' : 'remove';
		event.target.classList[action]('icon-arrow--down--rotate');
		verticalNav.classList[action]('nav--show');
		arrow2Rotate = !arrow2Rotate;
		// video.style.opacity = 1;
	});
};

var makeTitleListener = function makeTitleListener() {
	title.addEventListener('click', function () {
		updateTheme();
		window.scrollTo(0, -30);
		console.log(window.scrollY);
	});
};

var themes = ['pink', 'purple', 'image', 'red', 'green', 'blue'];
var idx = 0;
var updateTheme = function updateTheme() {
	var prevTheme = themes[idx];
	console.log('prevTheme: ', prevTheme);
	if (idx < 5) idx++;else idx = 0;
	console.log('idx: ', idx);
	var nextTheme = themes[idx];
	console.log('nextTheme: ', nextTheme);
	theme.classList.remove('theme--' + prevTheme);
	theme.classList.add('theme--' + nextTheme);
};

var init = function init() {
	makeNavListeners();
	makeArrowListeners();
	makeTitleListener();
};

init();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sUUFBUSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFFBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBdkI7QUFDQSxJQUFNLFFBQVEsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLGFBQXZCLENBQWY7QUFDQSxJQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFmO0FBQ0EsSUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBcEI7QUFDQSxJQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWQ7O0FBRUEsSUFBSSxlQUFlLEtBQW5CO0FBQ0EsSUFBSSxlQUFlLEtBQW5COztBQUVBLElBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFNO0FBQzlCLEtBQUksUUFBUSxNQUFNLElBQU4sQ0FBVyxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQ3JCLGdCQURxQixDQUNKLHNCQURJLENBQVgsQ0FBWjs7QUFHQSxPQUFNLE9BQU4sQ0FBYyxjQUFNO0FBQ25CLE1BQUksS0FBSyxHQUFHLEVBQUgsSUFBUyxJQUFsQjtBQUNBLEtBQUcsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNsQztBQUNBLE9BQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2xCLFdBQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQiwwQkFBckI7QUFDQSxnQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFdBQTFCO0FBQ0EsbUJBQWUsSUFBZjtBQUNBOztBQUVELE9BQUksU0FBUyxTQUFTLGNBQVQsUUFBNkIsRUFBN0IsQ0FBYjtBQUNBLFdBQVEsR0FBUixDQUFZLFdBQVosRUFBeUIsT0FBTyxPQUFoQztBQUNBLFVBQU8sY0FBUCxDQUFzQixFQUFDLFVBQVUsUUFBWCxFQUF0QjtBQUNBLFdBQVEsR0FBUixDQUFZLFdBQVosRUFBeUIsT0FBTyxPQUFoQztBQUNBLEdBWkQ7QUFhQSxFQWZEO0FBZ0JBLENBcEJEOztBQXNCQSxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsR0FBTTtBQUNoQyxRQUFPLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUMsS0FBRCxFQUFXO0FBQzNDO0FBQ0EsTUFBSSxTQUFTLENBQUMsWUFBRCxHQUFnQixLQUFoQixHQUF3QixRQUFyQztBQUNBLE1BQUksZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBcEI7QUFDQSxRQUFNLE1BQU4sQ0FBYSxTQUFiLENBQXVCLE1BQXZCLEVBQStCLG9CQUEvQjtBQUNBLGdCQUFjLFNBQWQsQ0FBd0IsTUFBeEIsRUFBZ0Msc0JBQWhDO0FBQ0EsUUFBTSxTQUFOLENBQWdCLE1BQWhCLEVBQXdCLGFBQXhCO0FBQ0EsaUJBQWUsQ0FBQyxZQUFoQjtBQUVBLEVBVEQ7O0FBV0EsUUFBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDLEtBQUQsRUFBVztBQUMzQztBQUNBLE1BQUksU0FBUyxDQUFDLFlBQUQsR0FBZ0IsS0FBaEIsR0FBd0IsUUFBckM7QUFDQSxRQUFNLE1BQU4sQ0FBYSxTQUFiLENBQXVCLE1BQXZCLEVBQStCLDBCQUEvQjtBQUNBLGNBQVksU0FBWixDQUFzQixNQUF0QixFQUE4QixXQUE5QjtBQUNBLGlCQUFlLENBQUMsWUFBaEI7QUFDQTtBQUNBLEVBUEQ7QUFRQSxDQXBCRDs7QUF1QkEsSUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLEdBQU07QUFDL0IsT0FBTSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3JDO0FBQ0EsU0FBTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQUMsRUFBcEI7QUFDQSxVQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQW5CO0FBQ0EsRUFKRDtBQUtBLENBTkQ7O0FBUUEsSUFBTSxTQUFTLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEIsS0FBNUIsRUFBb0MsT0FBcEMsRUFBNkMsTUFBN0MsQ0FBZjtBQUNBLElBQUksTUFBTSxDQUFWO0FBQ0EsSUFBTSxjQUFjLFNBQWQsV0FBYyxHQUFNO0FBQ3pCLEtBQUksWUFBWSxPQUFPLEdBQVAsQ0FBaEI7QUFDQSxTQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLFNBQTNCO0FBQ0EsS0FBSSxNQUFNLENBQVYsRUFBYSxNQUFiLEtBQ0ssTUFBTSxDQUFOO0FBQ0wsU0FBUSxHQUFSLENBQVksT0FBWixFQUFxQixHQUFyQjtBQUNBLEtBQUksWUFBWSxPQUFPLEdBQVAsQ0FBaEI7QUFDQSxTQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLFNBQTNCO0FBQ0EsT0FBTSxTQUFOLENBQWdCLE1BQWhCLGFBQWlDLFNBQWpDO0FBQ0EsT0FBTSxTQUFOLENBQWdCLEdBQWhCLGFBQThCLFNBQTlCO0FBQ0EsQ0FWRDs7QUFZQSxJQUFNLE9BQU8sU0FBUCxJQUFPLEdBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FKRDs7QUFNQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcbmNvbnNvbGUubG9nKCd0aGVtZTogJywgdGhlbWUpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanYtdGl0bGUnKTtcbmNvbnN0IGFycm93MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLWFycm93Jyk7XG5jb25zdCBhcnJvdzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi1hcnJvdy0tZG93bicpO1xuY29uc3QgdmVydGljYWxOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdmVydGljYWwtbmF2Jyk7XG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlbycpO1xuXG5sZXQgYXJyb3cxUm90YXRlID0gZmFsc2U7XG5sZXQgYXJyb3cyUm90YXRlID0gZmFsc2U7XG5cbmNvbnN0IG1ha2VOYXZMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cdGxldCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tYWluX19saXN0Jylcblx0XHQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tYWluX19saXN0LWl0ZW0nKSk7XG5cblx0aXRlbXMuZm9yRWFjaChsaSA9PiB7XG5cdFx0bGV0IGlkID0gbGkuaWQgfHwgbnVsbDtcblx0XHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdC8vIHVwZGF0ZVRoZW1lKCk7XG5cdFx0XHRpZiAoIWFycm93MlJvdGF0ZSkge1xuXHRcdFx0XHRhcnJvdzIuY2xhc3NMaXN0LmFkZCgnaWNvbi1hcnJvdy0tZG93bi0tcm90YXRlJyk7XG5cdFx0XHRcdHZlcnRpY2FsTmF2LmNsYXNzTGlzdC5hZGQoJ25hdi0tc2hvdycpO1xuXHRcdFx0XHRhcnJvdzJSb3RhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGEtJHtpZH1gKTtcdFxuXHRcdFx0Y29uc29sZS5sb2coJ3Njcm9sbFk6ICcsIHdpbmRvdy5zY3JvbGxZKVxuXHRcdFx0dGFyZ2V0LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xuXHRcdFx0Y29uc29sZS5sb2coJ3Njcm9sbFk6ICcsIHdpbmRvdy5zY3JvbGxZKVxuXHRcdH0pXG5cdH0pXG59O1xuXG5jb25zdCBtYWtlQXJyb3dMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cdGFycm93MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdC8vIHVwZGF0ZVRoZW1lKCk7XG5cdFx0bGV0IGFjdGlvbiA9ICFhcnJvdzFSb3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnO1xuXHRcdGxldCBob3Jpem9udGFsTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhvcml6b250YWwtbmF2Jyk7XG5cdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFthY3Rpb25dKCdpY29uLWFycm93LS1yb3RhdGUnKTtcblx0XHRob3Jpem9udGFsTmF2LmNsYXNzTGlzdFthY3Rpb25dKCduYXYtbWFpbl9fbGlzdC0tc2hvdycpO1xuXHRcdHZpZGVvLmNsYXNzTGlzdFthY3Rpb25dKCd2aWRlby0tc2hvdycpO1xuXHRcdGFycm93MVJvdGF0ZSA9ICFhcnJvdzFSb3RhdGU7XG5cdFx0XG5cdH0pO1xuXG5cdGFycm93Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdC8vIHVwZGF0ZVRoZW1lKCk7XG5cdFx0bGV0IGFjdGlvbiA9ICFhcnJvdzJSb3RhdGUgPyAnYWRkJyA6ICdyZW1vdmUnO1xuXHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbYWN0aW9uXSgnaWNvbi1hcnJvdy0tZG93bi0tcm90YXRlJyk7XG5cdFx0dmVydGljYWxOYXYuY2xhc3NMaXN0W2FjdGlvbl0oJ25hdi0tc2hvdycpO1xuXHRcdGFycm93MlJvdGF0ZSA9ICFhcnJvdzJSb3RhdGU7XG5cdFx0Ly8gdmlkZW8uc3R5bGUub3BhY2l0eSA9IDE7XG5cdH0pO1xufTtcblxuXG5jb25zdCBtYWtlVGl0bGVMaXN0ZW5lciA9ICgpID0+IHtcblx0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0dXBkYXRlVGhlbWUoKTtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgLTMwKTtcblx0XHRjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSk7XG5cdH0pXG59O1xuXG5jb25zdCB0aGVtZXMgPSBbJ3BpbmsnLCAncHVycGxlJywgJ2ltYWdlJywgJ3JlZCcsICAnZ3JlZW4nLCAnYmx1ZSddO1xubGV0IGlkeCA9IDA7XG5jb25zdCB1cGRhdGVUaGVtZSA9ICgpID0+IHtcblx0bGV0IHByZXZUaGVtZSA9IHRoZW1lc1tpZHhdO1xuXHRjb25zb2xlLmxvZygncHJldlRoZW1lOiAnLCBwcmV2VGhlbWUpO1xuXHRpZiAoaWR4IDwgNSkgaWR4Kytcblx0ZWxzZSBpZHggPSAwO1xuXHRjb25zb2xlLmxvZygnaWR4OiAnLCBpZHgpO1xuXHRsZXQgbmV4dFRoZW1lID0gdGhlbWVzW2lkeF07XG5cdGNvbnNvbGUubG9nKCduZXh0VGhlbWU6ICcsIG5leHRUaGVtZSk7XG5cdHRoZW1lLmNsYXNzTGlzdC5yZW1vdmUoYHRoZW1lLS0ke3ByZXZUaGVtZX1gKTtcblx0dGhlbWUuY2xhc3NMaXN0LmFkZChgdGhlbWUtLSR7bmV4dFRoZW1lfWApO1xufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRtYWtlTmF2TGlzdGVuZXJzKCk7XG5cdG1ha2VBcnJvd0xpc3RlbmVycygpO1xuXHRtYWtlVGl0bGVMaXN0ZW5lcigpO1xufTtcblxuaW5pdCgpOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKemNtTXZhbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096dEJRMEZCTEVsQlFVMHNVVUZCVVN4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVVVGQmRrSXNRMEZCWkR0QlFVTkJMRkZCUVZFc1IwRkJVaXhEUVVGWkxGTkJRVm9zUlVGQmRVSXNTMEZCZGtJN1FVRkRRU3hKUVVGTkxGRkJRVkVzVTBGQlV5eGpRVUZVTEVOQlFYZENMRlZCUVhoQ0xFTkJRV1E3UVVGRFFTeEpRVUZOTEZOQlFWTXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xHRkJRWFpDTEVOQlFXWTdRVUZEUVN4SlFVRk5MRk5CUVZNc1UwRkJVeXhoUVVGVUxFTkJRWFZDTEcxQ1FVRjJRaXhEUVVGbU8wRkJRMEVzU1VGQlRTeGpRVUZqTEZOQlFWTXNZVUZCVkN4RFFVRjFRaXhyUWtGQmRrSXNRMEZCY0VJN1FVRkRRU3hKUVVGTkxGRkJRVkVzVTBGQlV5eGhRVUZVTEVOQlFYVkNMRkZCUVhaQ0xFTkJRV1E3TzBGQlJVRXNTVUZCU1N4bFFVRmxMRXRCUVc1Q08wRkJRMEVzU1VGQlNTeGxRVUZsTEV0QlFXNUNPenRCUVVWQkxFbEJRVTBzYlVKQlFXMUNMRk5CUVc1Q0xHZENRVUZ0UWl4SFFVRk5PMEZCUXpsQ0xFdEJRVWtzVVVGQlVTeE5RVUZOTEVsQlFVNHNRMEZCVnl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzYVVKQlFYWkNMRVZCUTNKQ0xHZENRVVJ4UWl4RFFVTktMSE5DUVVSSkxFTkJRVmdzUTBGQldqczdRVUZIUVN4UFFVRk5MRTlCUVU0c1EwRkJZeXhqUVVGTk8wRkJRMjVDTEUxQlFVa3NTMEZCU3l4SFFVRkhMRVZCUVVnc1NVRkJVeXhKUVVGc1FqdEJRVU5CTEV0QlFVY3NaMEpCUVVnc1EwRkJiMElzVDBGQmNFSXNSVUZCTmtJc1dVRkJUVHRCUVVOc1F6dEJRVU5CTEU5QlFVa3NRMEZCUXl4WlFVRk1MRVZCUVcxQ08wRkJRMnhDTEZkQlFVOHNVMEZCVUN4RFFVRnBRaXhIUVVGcVFpeERRVUZ4UWl3d1FrRkJja0k3UVVGRFFTeG5Ra0ZCV1N4VFFVRmFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFUQkNMRmRCUVRGQ08wRkJRMEVzYlVKQlFXVXNTVUZCWmp0QlFVTkJPenRCUVVWRUxFOUJRVWtzVTBGQlV5eFRRVUZUTEdOQlFWUXNVVUZCTmtJc1JVRkJOMElzUTBGQllqdEJRVU5CTEZkQlFWRXNSMEZCVWl4RFFVRlpMRmRCUVZvc1JVRkJlVUlzVDBGQlR5eFBRVUZvUXp0QlFVTkJMRlZCUVU4c1kwRkJVQ3hEUVVGelFpeEZRVUZETEZWQlFWVXNVVUZCV0N4RlFVRjBRanRCUVVOQkxGZEJRVkVzUjBGQlVpeERRVUZaTEZkQlFWb3NSVUZCZVVJc1QwRkJUeXhQUVVGb1F6dEJRVU5CTEVkQldrUTdRVUZoUVN4RlFXWkVPMEZCWjBKQkxFTkJjRUpFT3p0QlFYTkNRU3hKUVVGTkxIRkNRVUZ4UWl4VFFVRnlRaXhyUWtGQmNVSXNSMEZCVFR0QlFVTm9ReXhSUVVGUExHZENRVUZRTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2xETEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXpORE8wRkJRMEVzVFVGQlNTeFRRVUZUTEVOQlFVTXNXVUZCUkN4SFFVRm5RaXhMUVVGb1FpeEhRVUYzUWl4UlFVRnlRenRCUVVOQkxFMUJRVWtzWjBKQlFXZENMRk5CUVZNc1lVRkJWQ3hEUVVGMVFpeHZRa0ZCZGtJc1EwRkJjRUk3UVVGRFFTeFJRVUZOTEUxQlFVNHNRMEZCWVN4VFFVRmlMRU5CUVhWQ0xFMUJRWFpDTEVWQlFTdENMRzlDUVVFdlFqdEJRVU5CTEdkQ1FVRmpMRk5CUVdRc1EwRkJkMElzVFVGQmVFSXNSVUZCWjBNc2MwSkJRV2hETzBGQlEwRXNVVUZCVFN4VFFVRk9MRU5CUVdkQ0xFMUJRV2hDTEVWQlFYZENMR0ZCUVhoQ08wRkJRMEVzYVVKQlFXVXNRMEZCUXl4WlFVRm9RanRCUVVWQkxFVkJWRVE3TzBGQlYwRXNVVUZCVHl4blFrRkJVQ3hEUVVGM1FpeFBRVUY0UWl4RlFVRnBReXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU16UXp0QlFVTkJMRTFCUVVrc1UwRkJVeXhEUVVGRExGbEJRVVFzUjBGQlowSXNTMEZCYUVJc1IwRkJkMElzVVVGQmNrTTdRVUZEUVN4UlFVRk5MRTFCUVU0c1EwRkJZU3hUUVVGaUxFTkJRWFZDTEUxQlFYWkNMRVZCUVN0Q0xEQkNRVUV2UWp0QlFVTkJMR05CUVZrc1UwRkJXaXhEUVVGelFpeE5RVUYwUWl4RlFVRTRRaXhYUVVFNVFqdEJRVU5CTEdsQ1FVRmxMRU5CUVVNc1dVRkJhRUk3UVVGRFFUdEJRVU5CTEVWQlVFUTdRVUZSUVN4RFFYQkNSRHM3UVVGMVFrRXNTVUZCVFN4dlFrRkJiMElzVTBGQmNFSXNhVUpCUVc5Q0xFZEJRVTA3UVVGREwwSXNUMEZCVFN4blFrRkJUaXhEUVVGMVFpeFBRVUYyUWl4RlFVRm5ReXhaUVVGTk8wRkJRM0pETzBGQlEwRXNVMEZCVHl4UlFVRlFMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVVNc1JVRkJjRUk3UVVGRFFTeFZRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRlBMRTlCUVc1Q08wRkJRMEVzUlVGS1JEdEJRVXRCTEVOQlRrUTdPMEZCVVVFc1NVRkJUU3hUUVVGVExFTkJRVU1zVFVGQlJDeEZRVUZUTEZGQlFWUXNSVUZCYlVJc1QwRkJia0lzUlVGQk5FSXNTMEZCTlVJc1JVRkJiME1zVDBGQmNFTXNSVUZCTmtNc1RVRkJOME1zUTBGQlpqdEJRVU5CTEVsQlFVa3NUVUZCVFN4RFFVRldPMEZCUTBFc1NVRkJUU3hqUVVGakxGTkJRV1FzVjBGQll5eEhRVUZOTzBGQlEzcENMRXRCUVVrc1dVRkJXU3hQUVVGUExFZEJRVkFzUTBGQmFFSTdRVUZEUVN4VFFVRlJMRWRCUVZJc1EwRkJXU3hoUVVGYUxFVkJRVEpDTEZOQlFUTkNPMEZCUTBFc1MwRkJTU3hOUVVGTkxFTkJRVllzUlVGQllTeE5RVUZpTEV0QlEwc3NUVUZCVFN4RFFVRk9PMEZCUTB3c1UwRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4SFFVRnlRanRCUVVOQkxFdEJRVWtzV1VGQldTeFBRVUZQTEVkQlFWQXNRMEZCYUVJN1FVRkRRU3hUUVVGUkxFZEJRVklzUTBGQldTeGhRVUZhTEVWQlFUSkNMRk5CUVROQ08wRkJRMEVzVDBGQlRTeFRRVUZPTEVOQlFXZENMRTFCUVdoQ0xHRkJRV2xETEZOQlFXcERPMEZCUTBFc1QwRkJUU3hUUVVGT0xFTkJRV2RDTEVkQlFXaENMR0ZCUVRoQ0xGTkJRVGxDTzBGQlEwRXNRMEZXUkRzN1FVRlpRU3hKUVVGTkxFOUJRVThzVTBGQlVDeEpRVUZQTEVkQlFVMDdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGS1JEczdRVUZOUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVLQ2w3Wm5WdVkzUnBiMjRnY2lobExHNHNkQ2w3Wm5WdVkzUnBiMjRnYnlocExHWXBlMmxtS0NGdVcybGRLWHRwWmlnaFpWdHBYU2w3ZG1GeUlHTTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaVHRwWmlnaFppWW1ZeWx5WlhSMWNtNGdZeWhwTENFd0tUdHBaaWgxS1hKbGRIVnliaUIxS0drc0lUQXBPM1poY2lCaFBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmFTdGNJaWRjSWlrN2RHaHliM2NnWVM1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdGOWRtRnlJSEE5Ymx0cFhUMTdaWGh3YjNKMGN6cDdmWDA3WlZ0cFhWc3dYUzVqWVd4c0tIQXVaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaHlLWHQyWVhJZ2JqMWxXMmxkV3pGZFczSmRPM0psZEhWeWJpQnZLRzU4ZkhJcGZTeHdMSEF1Wlhod2IzSjBjeXh5TEdVc2JpeDBLWDF5WlhSMWNtNGdibHRwWFM1bGVIQnZjblJ6ZldadmNpaDJZWElnZFQxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbExHazlNRHRwUEhRdWJHVnVaM1JvTzJrckt5bHZLSFJiYVYwcE8zSmxkSFZ5YmlCdmZYSmxkSFZ5YmlCeWZTa29LU0lzSW1OdmJuTjBJSFJvWlcxbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuUm9aVzFsSnlrN1hHNWpiMjV6YjJ4bExteHZaeWduZEdobGJXVTZJQ2NzSUhSb1pXMWxLVHRjYm1OdmJuTjBJSFJwZEd4bElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oycDJMWFJwZEd4bEp5azdYRzVqYjI1emRDQmhjbkp2ZHpFZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWFXTnZiaTFoY25KdmR5Y3BPMXh1WTI5dWMzUWdZWEp5YjNjeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtbGpiMjR0WVhKeWIzY3RMV1J2ZDI0bktUdGNibU52Ym5OMElIWmxjblJwWTJGc1RtRjJJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbXB6TFhabGNuUnBZMkZzTFc1aGRpY3BPMXh1WTI5dWMzUWdkbWxrWlc4Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRtbGtaVzhuS1R0Y2JseHViR1YwSUdGeWNtOTNNVkp2ZEdGMFpTQTlJR1poYkhObE8xeHViR1YwSUdGeWNtOTNNbEp2ZEdGMFpTQTlJR1poYkhObE8xeHVYRzVqYjI1emRDQnRZV3RsVG1GMlRHbHpkR1Z1WlhKeklEMGdLQ2tnUFQ0Z2UxeHVYSFJzWlhRZ2FYUmxiWE1nUFNCQmNuSmhlUzVtY205dEtHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dVlYWXRiV0ZwYmw5ZmJHbHpkQ2NwWEc1Y2RGeDBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTV1WVhZdGJXRnBibDlmYkdsemRDMXBkR1Z0SnlrcE8xeHVYRzVjZEdsMFpXMXpMbVp2Y2tWaFkyZ29iR2tnUFQ0Z2UxeHVYSFJjZEd4bGRDQnBaQ0E5SUd4cExtbGtJSHg4SUc1MWJHdzdYRzVjZEZ4MGJHa3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hHNWNkRngwWEhRdkx5QjFjR1JoZEdWVWFHVnRaU2dwTzF4dVhIUmNkRngwYVdZZ0tDRmhjbkp2ZHpKU2IzUmhkR1VwSUh0Y2JseDBYSFJjZEZ4MFlYSnliM2N5TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmxqYjI0dFlYSnliM2N0TFdSdmQyNHRMWEp2ZEdGMFpTY3BPMXh1WEhSY2RGeDBYSFIyWlhKMGFXTmhiRTVoZGk1amJHRnpjMHhwYzNRdVlXUmtLQ2R1WVhZdExYTm9iM2NuS1R0Y2JseDBYSFJjZEZ4MFlYSnliM2N5VW05MFlYUmxJRDBnZEhKMVpUdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBiR1YwSUhSaGNtZGxkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLR0JoTFNSN2FXUjlZQ2s3WEhSY2JseDBYSFJjZEdOdmJuTnZiR1V1Ykc5bktDZHpZM0p2Ykd4Wk9pQW5MQ0IzYVc1a2IzY3VjMk55YjJ4c1dTbGNibHgwWEhSY2RIUmhjbWRsZEM1elkzSnZiR3hKYm5SdlZtbGxkeWg3WW1Wb1lYWnBiM0k2SUZ3aWMyMXZiM1JvWENKOUtUdGNibHgwWEhSY2RHTnZibk52YkdVdWJHOW5LQ2R6WTNKdmJHeFpPaUFuTENCM2FXNWtiM2N1YzJOeWIyeHNXU2xjYmx4MFhIUjlLVnh1WEhSOUtWeHVmVHRjYmx4dVkyOXVjM1FnYldGclpVRnljbTkzVEdsemRHVnVaWEp6SUQwZ0tDa2dQVDRnZTF4dVhIUmhjbkp2ZHpFdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pYWmxiblFwSUQwK0lIdGNibHgwWEhRdkx5QjFjR1JoZEdWVWFHVnRaU2dwTzF4dVhIUmNkR3hsZENCaFkzUnBiMjRnUFNBaFlYSnliM2N4VW05MFlYUmxJRDhnSjJGa1pDY2dPaUFuY21WdGIzWmxKenRjYmx4MFhIUnNaWFFnYUc5eWFYcHZiblJoYkU1aGRpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXFjeTFvYjNKcGVtOXVkR0ZzTFc1aGRpY3BPMXh1WEhSY2RHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1JiWVdOMGFXOXVYU2duYVdOdmJpMWhjbkp2ZHkwdGNtOTBZWFJsSnlrN1hHNWNkRngwYUc5eWFYcHZiblJoYkU1aGRpNWpiR0Z6YzB4cGMzUmJZV04wYVc5dVhTZ25ibUYyTFcxaGFXNWZYMnhwYzNRdExYTm9iM2NuS1R0Y2JseDBYSFIyYVdSbGJ5NWpiR0Z6YzB4cGMzUmJZV04wYVc5dVhTZ25kbWxrWlc4dExYTm9iM2NuS1R0Y2JseDBYSFJoY25KdmR6RlNiM1JoZEdVZ1BTQWhZWEp5YjNjeFVtOTBZWFJsTzF4dVhIUmNkRnh1WEhSOUtUdGNibHh1WEhSaGNuSnZkekl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlhabGJuUXBJRDArSUh0Y2JseDBYSFF2THlCMWNHUmhkR1ZVYUdWdFpTZ3BPMXh1WEhSY2RHeGxkQ0JoWTNScGIyNGdQU0FoWVhKeWIzY3lVbTkwWVhSbElEOGdKMkZrWkNjZ09pQW5jbVZ0YjNabEp6dGNibHgwWEhSbGRtVnVkQzUwWVhKblpYUXVZMnhoYzNOTWFYTjBXMkZqZEdsdmJsMG9KMmxqYjI0dFlYSnliM2N0TFdSdmQyNHRMWEp2ZEdGMFpTY3BPMXh1WEhSY2RIWmxjblJwWTJGc1RtRjJMbU5zWVhOelRHbHpkRnRoWTNScGIyNWRLQ2R1WVhZdExYTm9iM2NuS1R0Y2JseDBYSFJoY25KdmR6SlNiM1JoZEdVZ1BTQWhZWEp5YjNjeVVtOTBZWFJsTzF4dVhIUmNkQzh2SUhacFpHVnZMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh1WEhSOUtUdGNibjA3WEc1Y2JseHVZMjl1YzNRZ2JXRnJaVlJwZEd4bFRHbHpkR1Z1WlhJZ1BTQW9LU0E5UGlCN1hHNWNkSFJwZEd4bExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4dVhIUmNkSFZ3WkdGMFpWUm9aVzFsS0NrN1hHNWNkRngwZDJsdVpHOTNMbk5qY205c2JGUnZLREFzSUMwek1DazdYRzVjZEZ4MFkyOXVjMjlzWlM1c2IyY29kMmx1Wkc5M0xuTmpjbTlzYkZrcE8xeHVYSFI5S1Z4dWZUdGNibHh1WTI5dWMzUWdkR2hsYldWeklEMGdXeWR3YVc1ckp5d2dKM0IxY25Cc1pTY3NJQ2RwYldGblpTY3NJQ2R5WldRbkxDQWdKMmR5WldWdUp5d2dKMkpzZFdVblhUdGNibXhsZENCcFpIZ2dQU0F3TzF4dVkyOXVjM1FnZFhCa1lYUmxWR2hsYldVZ1BTQW9LU0E5UGlCN1hHNWNkR3hsZENCd2NtVjJWR2hsYldVZ1BTQjBhR1Z0WlhOYmFXUjRYVHRjYmx4MFkyOXVjMjlzWlM1c2IyY29KM0J5WlhaVWFHVnRaVG9nSnl3Z2NISmxkbFJvWlcxbEtUdGNibHgwYVdZZ0tHbGtlQ0E4SURVcElHbGtlQ3NyWEc1Y2RHVnNjMlVnYVdSNElEMGdNRHRjYmx4MFkyOXVjMjlzWlM1c2IyY29KMmxrZURvZ0p5d2dhV1I0S1R0Y2JseDBiR1YwSUc1bGVIUlVhR1Z0WlNBOUlIUm9aVzFsYzF0cFpIaGRPMXh1WEhSamIyNXpiMnhsTG14dlp5Z25ibVY0ZEZSb1pXMWxPaUFuTENCdVpYaDBWR2hsYldVcE8xeHVYSFIwYUdWdFpTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtHQjBhR1Z0WlMwdEpIdHdjbVYyVkdobGJXVjlZQ2s3WEc1Y2RIUm9aVzFsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZSFJvWlcxbExTMGtlMjVsZUhSVWFHVnRaWDFnS1R0Y2JuMWNibHh1WTI5dWMzUWdhVzVwZENBOUlDZ3BJRDArSUh0Y2JseDBiV0ZyWlU1aGRreHBjM1JsYm1WeWN5Z3BPMXh1WEhSdFlXdGxRWEp5YjNkTWFYTjBaVzVsY25Nb0tUdGNibHgwYldGclpWUnBkR3hsVEdsemRHVnVaWElvS1R0Y2JuMDdYRzVjYm1sdWFYUW9LVHNpWFgwPSJ9
