

export default function (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationChange' in window ? 'orientationChange' : 'resize'
  let refreshRem = function () {
    const clientWidth = docEl.clientWidth // 窗口宽度
    const designSize = 750 // 设计图尺寸
    const basicSize = 100 // 假定比例
    let rem = basicSize * (clientWidth / designSize)
    docEl.style.fontSize = rem + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refreshRem, false)
  doc.addEventListener('DOMContentLoaded', refreshRem, false)
}
