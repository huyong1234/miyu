'use strict';
var _createClass = (function () {
  function n(e, t) {
    for (var c = 0; c < t.length; c++) {
      var n = t[c];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  return function (e, t, c) {
    return t && n(e.prototype, t), c && n(e, c), e;
  };
})();
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
!(function () {
  function e(e) {
    return [].slice.call(e);
  }
  var t =
    (_createClass(c, [
      {
        key: 'init',
        value: function () {
          var c = this;
          document
            .getElementById('aside')
            .addEventListener('click', function (e) {
              var t;
              c.lock ||
                ((t = e.target || e.srcElement).dataset.index &&
                  ((c.activeIndex = +t.dataset.index), c.handleChange()));
            }),
            window.addEventListener('wheel', function (e) {
              0 < e.deltaY ? c.next() : e.deltaY < 0 && c.back();
            });
        },
      },
      {
        key: 'next',
        value: function () {
          this.activeIndex >= this.length - 1 ||
            this.lock ||
            (this.activeIndex++, this.handleChange());
        },
      },
      {
        key: 'back',
        value: function () {
          this.activeIndex <= 0 ||
            this.lock ||
            (this.activeIndex--, this.handleChange());
        },
      },
      {
        key: 'handleChange',
        value: function () {
          (this.lock = !0),
            this.callback && this.callback(),
            this.applyAside(),
            this.applySection(),
            this.applyHeader(),
            this.unLock();
        },
      },
      {
        key: 'applySection',
        value: function () {
          var c = this;
          e(document.querySelectorAll('.section')).forEach(function (e, t) {
            return (e.className =
              t === c.activeIndex
                ? e.className + ' section-active'
                : e.className.replace(/ section-active/g, ''));
          });
        },
      },
      {
        key: 'applyAside',
        value: function () {
          var c = this;
          e(document.querySelectorAll('.aside-list li')).forEach(function (
            e,
            t
          ) {
            return (e.className = t === c.activeIndex ? 'active' : '');
          });
        },
      },
      {
        key: 'applyHeader',
        value: function () {
          var e = document.getElementById('header');
          this.activeIndex
            ? (e.className =
                -1 !== e.className.indexOf('header-black')
                  ? e.className
                  : e.className + ' header-black')
            : (e.className = e.className.replace(/ header-black/g, ''));
        },
      },
      {
        key: 'unLock',
        value: function () {
          var e = this;
          setTimeout(function () {
            e.lock = !1;
          }, this.lockDelay);
        },
      },
    ]),
    c);
  function c(e) {
    _classCallCheck(this, c),
      (this.length = 8),
      (this.activeIndex = 0),
      (this.lockDelay = 1500),
      (this.lock = !1),
      (this.callback = e);
  }
  function n() {
    return (null);
  }
  var a = document.getElementById('audioControl'),
    i = document.getElementById('video-home'),
    // l = document.getElementById('qrcode'),
    s = document.getElementsByTagName('video'),
    o = {
      'video-home': 0,
      'video-facekini': 3,
      'video-camera': 4,
      'video-chat': 6,
    };
//   document.getElementById('qrcode-mask').addEventListener('click', n),
//     document
//       .getElementById('show-qrcode')
//       .addEventListener('click', function () {
//         return (l.style.display = 'block');
//       }),
//     a.addEventListener('click', function () {
//       ~e(a.classList).indexOf('muted')
//         ? ((a.className = a.className.replace(/ muted/g, '')), (i.muted = !1))
//         : (a.classList.add('muted'), (i.muted = !0));
//     });
  var d = new t(function () {
    n(),
      e(s).forEach(function (e) {
        return o[e.id] === d.activeIndex ? e.play() : e.pause();
      });
  });
  d.init(),
    setTimeout(function () {
      var e = [
          '      %c___                    ___                    ___                    %c___%c',
          '     /  /\\                  /  /\\                  /  /\\                  %c/  /\\%c',
          '    /  /::\\                /  /::\\                /  /:/                 %c/  /:/%c',
          '   /__/:/\\:\\              /  /:/\\:\\              /  /:/                 %c/  /:/%c',
          '  _\\_ \\:\\ \\:\\            /  /:/  \\:\\            /  /:/                 %c/  /:/%c',
          ' /__/\\ \\:\\ \\:\\          /__/:/ \\__\\:\\          /__/:/     /\\          %c/__/:/%c',
          ' \\  \\:\\ \\:\\_\\/          \\  \\:\\ /  /:/          \\  \\:\\    /:/          %c\\  \\:\\%c',
          '  \\  \\:\\_\\:\\             \\  \\:\\  /:/            \\  \\:\\  /:/            %c\\  \\:\\%c',
          '   \\  \\:\\/:/              \\  \\:\\/:/              \\  \\:\\/:/              %c\\  \\:\\%c',
          '    \\  \\::/                \\  \\::/                \\  \\::/                %c\\  \\:\\%c',
          '     \\__\\/                  \\__\\/                  \\__\\/                  %c\\__\\/',
        ],
        t = new Array(2 * e.length)
          .toString()
          .split(',')
          .map(function (e, t) {
            return t % 2 ? 'color: #25d4d0' : 'color: #fff';
          });
      console.log.apply(console, [e.join('\n')].concat(t));
    }, 0);
})();
