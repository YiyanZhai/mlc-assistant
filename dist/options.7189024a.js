const e=document.getElementById("inline");chrome.storage.sync.get({inlineMode:!1},n=>{e.checked=n.inlineMode}),e.addEventListener("change",function(){this.checked?(console.log("Checkbox is checked.."),chrome.storage.sync.set({inlineMode:!0})):(console.log("Checkbox is not checked.."),chrome.storage.sync.set({inlineMode:!1}))});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6IkFDQUEsTUFBTSxFQUFlLFNBQVMsY0FBYyxDQUFDLFVBRTdDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLENBQUUsV0FBWSxDQUFBLENBQU0sRUFDcEIsQUFBQyxJQUNHLEVBQWEsT0FBTyxDQUFHLEVBQU0sVUFBVSxBQUMzQyxHQUVKLEVBQWEsZ0JBQWdCLENBQUMsU0FBVSxXQUNoQyxJQUFJLENBQUMsT0FBTyxFQUNkLFFBQVEsR0FBRyxDQUFDLHlCQUNaLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBRSxXQUFZLENBQUEsQ0FBSyxLQUU1QyxRQUFRLEdBQUcsQ0FBQyw2QkFDWixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUUsV0FBWSxDQUFBLENBQU0sR0FFbkQiLCJzb3VyY2VzIjpbIjxhbm9uPiIsInNyYy9vcHRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlubGluZVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5saW5lXCIpO1xuLy8gU2V0IHZhbHVlIGNvcnJlY3RseSBpZiBpdCBoYXMgYmVlbiBwcmV2aW91c2x5IHNldFxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgIGlubGluZU1vZGU6IGZhbHNlXG59LCAoaXRlbXMpPT57XG4gICAgaW5saW5lU3dpdGNoLmNoZWNrZWQgPSBpdGVtcy5pbmxpbmVNb2RlO1xufSk7XG5pbmxpbmVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggaXMgY2hlY2tlZC4uXCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICAgICAgICBpbmxpbmVNb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggaXMgbm90IGNoZWNrZWQuLlwiKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgICAgICAgICAgaW5saW5lTW9kZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IC8vIGNvbnN0IHByb21wdEN1c3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdEN1c3RvbWl6YXRpb25cIilcbiAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcbiAvLyAgIHtjdXN0b21pemF0aW9uIDogMH0sIChpdGVtcykgPT4ge1xuIC8vICAgICBwcm9tcHRDdXN0XG4gLy8gICB9XG4gLy8gKVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeGxRVUZsTEZOQlFWTXNZMEZCWXl4RFFVRkRPMEZCUXpkRExHOUVRVUZ2UkR0QlFVTndSQ3hQUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVTnVRanRKUVVGRkxGbEJRVms3UVVGQlRTeEhRVU53UWl4RFFVRkRPMGxCUTBjc1lVRkJZU3hQUVVGUExFZEJRVWNzVFVGQlRTeFZRVUZWTzBGQlF6TkRPMEZCUlVvc1lVRkJZU3huUWtGQlowSXNRMEZCUXl4VlFVRlZPMGxCUTNCRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTm9RaXhSUVVGUkxFZEJRVWNzUTBGQlF6dFJRVU5hTEU5QlFVOHNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVVU3V1VGQlJTeFpRVUZaTzFGQlFVczdTVUZET1VNc1QwRkJUenRSUVVOTUxGRkJRVkVzUjBGQlJ5eERRVUZETzFGQlExb3NUMEZCVHl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlJUdFpRVUZGTEZsQlFWazdVVUZCVFR0SlFVTXZRenRCUVVOS0xFbEJSVUVzYjBWQlFXOUZPME5CUlhCRkxESkNRVUV5UWp0RFFVTXpRaXh6UTBGQmMwTTdRMEZEZEVNc2FVSkJRV2xDTzBOQlEycENMRTFCUVUwN1EwRkRUaXhKUVVGSklpd2ljMjkxY21ObGN5STZXeUp6Y21NdmIzQjBhVzl1Y3k1cWN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQnBibXhwYm1WVGQybDBZMmdnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2hjSW1sdWJHbHVaVndpS1R0Y2JpOHZJRk5sZENCMllXeDFaU0JqYjNKeVpXTjBiSGtnYVdZZ2FYUWdhR0Z6SUdKbFpXNGdjSEpsZG1sdmRYTnNlU0J6WlhSY2JtTm9jbTl0WlM1emRHOXlZV2RsTG5ONWJtTXVaMlYwS0Z4dUlDQWdJSHNnYVc1c2FXNWxUVzlrWlRvZ1ptRnNjMlVnZlN4Y2JpQWdJQ0FvYVhSbGJYTXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXNXNhVzVsVTNkcGRHTm9MbU5vWldOclpXUWdQU0JwZEdWdGN5NXBibXhwYm1WTmIyUmxPMXh1SUNBZ0lIMWNiaUFnS1R0Y2JtbHViR2x1WlZOM2FYUmphQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYUdGdVoyVW5MQ0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVqYUdWamEyVmtLU0I3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloY0lrTm9aV05yWW05NElHbHpJR05vWldOclpXUXVMbHdpS1R0Y2JpQWdJQ0FnSUdOb2NtOXRaUzV6ZEc5eVlXZGxMbk41Ym1NdWMyVjBLQ0I3SUdsdWJHbHVaVTF2WkdVNklIUnlkV1VnZlNBcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloY0lrTm9aV05yWW05NElHbHpJRzV2ZENCamFHVmphMlZrTGk1Y0lpazdYRzRnSUNBZ0lDQmphSEp2YldVdWMzUnZjbUZuWlM1emVXNWpMbk5sZENnZ2V5QnBibXhwYm1WTmIyUmxPaUJtWVd4elpTQjlJQ2s3WEc0Z0lDQWdmVnh1ZlNrN1hHNWNiaTh2SUdOdmJuTjBJSEJ5YjIxd2RFTjFjM1FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2hjSW5CeWIyMXdkRU4xYzNSdmJXbDZZWFJwYjI1Y0lpbGNibHh1THk4Z1kyaHliMjFsTG5OMGIzSmhaMlV1YzNsdVl5NW5aWFFvWEc0dkx5QWdJSHRqZFhOMGIyMXBlbUYwYVc5dUlEb2dNSDBzSUNocGRHVnRjeWtnUFQ0Z2UxeHVMeThnSUNBZ0lIQnliMjF3ZEVOMWMzUmNiaTh2SUNBZ2ZWeHVMeThnS1NKZExDSnVZVzFsY3lJNlcxMHNJblpsY25OcGIyNGlPak1zSW1acGJHVWlPaUp2Y0hScGIyNXpMa2hCVTBoZlVrVkdYemhtWkRkaVpqTmxOamRtT1RsbE1UWXVhbk11YldGd0luMD1cbiIsImNvbnN0IGlubGluZVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5saW5lXCIpO1xuLy8gU2V0IHZhbHVlIGNvcnJlY3RseSBpZiBpdCBoYXMgYmVlbiBwcmV2aW91c2x5IHNldFxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXG4gICAgeyBpbmxpbmVNb2RlOiBmYWxzZSB9LFxuICAgIChpdGVtcykgPT4ge1xuICAgICAgICBpbmxpbmVTd2l0Y2guY2hlY2tlZCA9IGl0ZW1zLmlubGluZU1vZGU7XG4gICAgfVxuICApO1xuaW5saW5lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggaXMgY2hlY2tlZC4uXCIpO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoIHsgaW5saW5lTW9kZTogdHJ1ZSB9ICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggaXMgbm90IGNoZWNrZWQuLlwiKTtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KCB7IGlubGluZU1vZGU6IGZhbHNlIH0gKTtcbiAgICB9XG59KTtcblxuLy8gY29uc3QgcHJvbXB0Q3VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0Q3VzdG9taXphdGlvblwiKVxuXG4vLyBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcbi8vICAge2N1c3RvbWl6YXRpb24gOiAwfSwgKGl0ZW1zKSA9PiB7XG4vLyAgICAgcHJvbXB0Q3VzdFxuLy8gICB9XG4vLyApIl0sIm5hbWVzIjpbImlubGluZVN3aXRjaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImlubGluZU1vZGUiLCJpdGVtcyIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldCJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5IQVNIX1JFRl84ZmQ3YmYzZTY3Zjk5ZTE2LmpzLm1hcCJ9
