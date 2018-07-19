(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var makeAnchorListeners = function makeAnchorListeners() {
	var items = Array.from(document.querySelector('.nav').firstElementChild.querySelectorAll('.nav-link'));
	items.forEach(function (li) {
		li.addEventListener('click', function () {
			var target = document.getElementById('a-' + li.id);
			console.log('target: ', target);

			// target.scrollIntoView({behavior: "smooth", block: "start"});
		});
	});
};

var init = function init() {
	makeAnchorListeners();
};

init();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sc0JBQXNCLFNBQXRCLG1CQUFzQixHQUFNO0FBQ2pDLEtBQUksUUFBUSxNQUFNLElBQU4sQ0FBVyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFDckIsaUJBRHFCLENBRXJCLGdCQUZxQixDQUVKLFdBRkksQ0FBWCxDQUFaO0FBR0EsT0FBTSxPQUFOLENBQWMsY0FBTTtBQUNuQixLQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDbEMsT0FBSSxTQUFTLFNBQVMsY0FBVCxRQUE2QixHQUFHLEVBQWhDLENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE1BQXhCOztBQUVBO0FBQ0EsR0FMRDtBQU1BLEVBUEQ7QUFRQSxDQVpEOztBQWVBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNsQjtBQUNBLENBRkQ7O0FBSUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IG1ha2VBbmNob3JMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cdGxldCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXG5cdFx0LmZpcnN0RWxlbWVudENoaWxkXG5cdFx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpKTtcblx0aXRlbXMuZm9yRWFjaChsaSA9PiB7XG5cdFx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGEtJHtsaS5pZH1gKTtcblx0XHRcdGNvbnNvbGUubG9nKCd0YXJnZXQ6ICcsIHRhcmdldCk7XG5cdFx0XHRcblx0XHRcdC8vIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCJ9KTtcblx0XHR9KVxuXHR9KVxufVxuXG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdG1ha2VBbmNob3JMaXN0ZW5lcnMoKTtcbn07XG5cbmluaXQoKTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12YW5NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenRCUTBGQkxFbEJRVTBzYzBKQlFYTkNMRk5CUVhSQ0xHMUNRVUZ6UWl4SFFVRk5PMEZCUTJwRExFdEJRVWtzVVVGQlVTeE5RVUZOTEVsQlFVNHNRMEZCVnl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVFVGQmRrSXNSVUZEY2tJc2FVSkJSSEZDTEVOQlJYSkNMR2RDUVVaeFFpeERRVVZLTEZkQlJra3NRMEZCV0N4RFFVRmFPMEZCUjBFc1QwRkJUU3hQUVVGT0xFTkJRV01zWTBGQlRUdEJRVU51UWl4TFFVRkhMR2RDUVVGSUxFTkJRVzlDTEU5QlFYQkNMRVZCUVRaQ0xGbEJRVTA3UVVGRGJFTXNUMEZCU1N4VFFVRlRMRk5CUVZNc1kwRkJWQ3hSUVVFMlFpeEhRVUZITEVWQlFXaERMRU5CUVdJN1FVRkRRU3hYUVVGUkxFZEJRVklzUTBGQldTeFZRVUZhTEVWQlFYZENMRTFCUVhoQ096dEJRVVZCTzBGQlEwRXNSMEZNUkR0QlFVMUJMRVZCVUVRN1FVRlJRU3hEUVZwRU96dEJRV1ZCTEVsQlFVMHNUMEZCVHl4VFFVRlFMRWxCUVU4c1IwRkJUVHRCUVVOc1FqdEJRVU5CTEVOQlJrUTdPMEZCU1VFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaWdwZTJaMWJtTjBhVzl1SUhJb1pTeHVMSFFwZTJaMWJtTjBhVzl1SUc4b2FTeG1LWHRwWmlnaGJsdHBYU2w3YVdZb0lXVmJhVjBwZTNaaGNpQmpQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVU3YVdZb0lXWW1KbU1wY21WMGRYSnVJR01vYVN3aE1DazdhV1lvZFNseVpYUjFjbTRnZFNocExDRXdLVHQyWVhJZ1lUMXVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsya3JYQ0luWENJcE8zUm9jbTkzSUdFdVkyOWtaVDFjSWsxUFJGVk1SVjlPVDFSZlJrOVZUa1JjSWl4aGZYWmhjaUJ3UFc1YmFWMDllMlY0Y0c5eWRITTZlMzE5TzJWYmFWMWJNRjB1WTJGc2JDaHdMbVY0Y0c5eWRITXNablZ1WTNScGIyNG9jaWw3ZG1GeUlHNDlaVnRwWFZzeFhWdHlYVHR5WlhSMWNtNGdieWh1Zkh4eUtYMHNjQ3h3TG1WNGNHOXlkSE1zY2l4bExHNHNkQ2w5Y21WMGRYSnVJRzViYVYwdVpYaHdiM0owYzMxbWIzSW9kbUZ5SUhVOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpTeHBQVEE3YVR4MExteGxibWQwYUR0cEt5c3BieWgwVzJsZEtUdHlaWFIxY200Z2IzMXlaWFIxY200Z2NuMHBLQ2tpTENKamIyNXpkQ0J0WVd0bFFXNWphRzl5VEdsemRHVnVaWEp6SUQwZ0tDa2dQVDRnZTF4dVhIUnNaWFFnYVhSbGJYTWdQU0JCY25KaGVTNW1jbTl0S0dSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV1WVhZbktWeHVYSFJjZEM1bWFYSnpkRVZzWlcxbGJuUkRhR2xzWkZ4dVhIUmNkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1Ym1GMkxXeHBibXNuS1NrN1hHNWNkR2wwWlcxekxtWnZja1ZoWTJnb2JHa2dQVDRnZTF4dVhIUmNkR3hwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1WEhSY2RGeDBiR1YwSUhSaGNtZGxkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLR0JoTFNSN2JHa3VhV1I5WUNrN1hHNWNkRngwWEhSamIyNXpiMnhsTG14dlp5Z25kR0Z5WjJWME9pQW5MQ0IwWVhKblpYUXBPMXh1WEhSY2RGeDBYRzVjZEZ4MFhIUXZMeUIwWVhKblpYUXVjMk55YjJ4c1NXNTBiMVpwWlhjb2UySmxhR0YyYVc5eU9pQmNJbk50YjI5MGFGd2lMQ0JpYkc5amF6b2dYQ0p6ZEdGeWRGd2lmU2s3WEc1Y2RGeDBmU2xjYmx4MGZTbGNibjFjYmx4dVhHNWpiMjV6ZENCcGJtbDBJRDBnS0NrZ1BUNGdlMXh1WEhSdFlXdGxRVzVqYUc5eVRHbHpkR1Z1WlhKektDazdYRzU5TzF4dVhHNXBibWwwS0NrN0lsMTkifQ==
