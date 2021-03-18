import Vue from 'vue';
import { Message } from 'element-ui'

Vue.prototype.$message = Message
Vue.directive('Int', {
        // 当绑定元素插入到 DOM 中。
        bind: function(el, binding, vnode) {
            //
            const input = el.getElementsByTagName('input')[0];
            input.onkeyup = function(e) {

                if (e.keyCode == 190) {

                    Message({
                        type: 'warning',
                        duration: 5000,
                        showClose: true,
                        message: '请不要输入小数!',
                    })
                }
                if (input.value.length === 1) {
                    input.value = input.value.replace(/[^0-9]/g, '')
                } else {
                    if (Number(input.value) > 2147483647) {
                        input.value = 1;
                    } else {
                        input.value = input.value.replace(/[^\d]/g, '')
                    }

                }
                //
            }
        }
    })
    //数字控制两位小数
Vue.directive('enterNumber', {
        bind: function(el, { value = 3 }) {
            el = el.nodeName == "INPUT" ? el : el.children[0]
            var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
            el.addEventListener('keyup', function() {
                el.value = el.value.match(new RegExp(RegStr, 'g'));
                el.dispatchEvent(new Event('input'))
            })
        }
    })
    //数字控制4位小数
Vue.directive('enterNumberFour', {
        bind: function(el, { value = 4 }) {
            el = el.nodeName == "INPUT" ? el : el.children[0]
            var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
            el.addEventListener('keyup', function() {
                el.value = el.value.match(new RegExp(RegStr, 'g'));
                el.dispatchEvent(new Event('input'))
            })
        }
    })
    //数字控制6位小数
Vue.directive('enterNumberSix', {
        bind: function(el, { value = 6 }) {
            el = el.nodeName == "INPUT" ? el : el.children[0]
            var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
            el.addEventListener('keyup', function() {
                el.value = el.value.match(new RegExp(RegStr, 'g'));
                el.dispatchEvent(new Event('input'))
            })
        }
    })
    //字符串控制
Vue.directive('trimString', {
    update: function(el, binding, vnode, oldNode) {
        el = el.nodeName == "INPUT" ? el : el.children[0]

        if (typeof(el.value) === "string") {
            var str = el.value;
        } else {
            var str = String(el.value)
        }
        el.value = str.trim()
        el.dispatchEvent(new Event('input'))
    }
})
Vue.directive('Down', {
    inserted: (el, binding) => {
        el.style.cssText = 'cursor: pointer;color:write;'
        el.addEventListener('click', () => {
            let link = document.createElement('a')
            let url = binding.value;
            // 这里是将url转成blob地址，
            fetch(url).then(res => res.blob()).then(blob => { // 将链接地址字符内容转变成blob地址
                link.href = URL.createObjectURL(blob)
                link.download = '';
                document.body.appendChild(link)
                link.click()
            })
        })
    }
})

Vue.directive('Int2to', {

        // 指令的定义
        inserted: function(el, validateStr) {
            el = el.nodeName == "INPUT" ? el : el.children[0]
            el.addEventListener("input", function() {
                //进行验证
                checkedfun(el);
            });

            function checkedfun(el) {
                let reg = new RegExp("^[0-9]*$");
                if (!reg.test(el.value)) {
                    el.value = el.value.replace(/[^0-9]+/g, "");
                    el.dispatchEvent(new Event("input")); //调用input事件使vue v-model绑定更新
                }
            }
        }
    })
    //弹出框拖动
Vue.directive('dialogDrag', {
    bind(el, binding, vnode, oldVnode) {
        //弹框可拉伸最小宽高
        let minWidth = 400;
        let minHeight = 300;
        //初始非全屏
        let isFullScreen = false;
        //当前宽高
        let nowWidth = 0;
        let nowHight = 0;
        //当前顶部高度
        let nowMarginTop = 0;
        //获取弹框头部（这部分可双击全屏）
        const dialogHeaderEl = el.querySelector('.el-dialog__header');
        //弹窗
        const dragDom = el.querySelector('.el-dialog');
        //给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
        dragDom.style.overflow = "auto";
        //清除选择头部文字效果
        //dialogHeaderEl.onselectstart = new Function("return false");
        //头部加上可拖动cursor
        dialogHeaderEl.style.cursor = 'move';
        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
        let moveDown = (e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft;
            const disY = e.clientY - dialogHeaderEl.offsetTop;
            // 获取到的值带px 正则匹配替换
            let styL, styT;
            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if (sty.left.includes('%')) {
                styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
                styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
            } else {
                styL = +sty.left.replace(/\px/g, '');
                styT = +sty.top.replace(/\px/g, '');
            };
            document.onmousemove = function(e) {
                // 通过事件委托，计算移动的距离
                const l = e.clientX - disX;
                const t = e.clientY - disY;
                // 移动当前元素 
                dragDom.style.left = `${l + styL}px`;
                dragDom.style.top = `${t + styT}px`;
                //将此时的位置传出去
                //binding.value({x:e.pageX,y:e.pageY})
            };
            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
        dialogHeaderEl.onmousedown = moveDown;
        //双击头部全屏效果
        dialogHeaderEl.ondblclick = (e) => {
            if (isFullScreen == false) {
                nowHight = dragDom.clientHeight;
                nowWidth = dragDom.clientWidth;
                nowMarginTop = dragDom.style.marginTop;
                dragDom.style.left = 0;
                dragDom.style.top = 0;
                dragDom.style.height = "100VH";
                dragDom.style.width = "100VW";
                dragDom.style.marginTop = 0;
                isFullScreen = true;
                dialogHeaderEl.style.cursor = 'initial';
                dialogHeaderEl.onmousedown = null;
            } else {
                dragDom.style.height = "auto";
                dragDom.style.width = nowWidth + 'px';
                dragDom.style.marginTop = nowMarginTop;
                isFullScreen = false;
                dialogHeaderEl.style.cursor = 'move';
                dialogHeaderEl.onmousedown = moveDown;
            }
        }
        dragDom.onmousemove = function(e) {
            let moveE = e;
            if (e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 || dragDom.offsetLeft + 10 > e.clientX) {
                dragDom.style.cursor = 'w-resize';
            } else if (el.scrollTop + e.clientY > dragDom.offsetTop + dragDom.clientHeight - 10) {
                dragDom.style.cursor = 's-resize';
            } else {
                dragDom.style.cursor = 'default';
                dragDom.onmousedown = null;
            }
            dragDom.onmousedown = (e) => {
                const clientX = e.clientX;
                const clientY = e.clientY;
                let elW = dragDom.clientWidth;
                let elH = dragDom.clientHeight;
                let EloffsetLeft = dragDom.offsetLeft;
                let EloffsetTop = dragDom.offsetTop;
                dragDom.style.userSelect = 'none';
                let ELscrollTop = el.scrollTop;
                //判断点击的位置是不是为头部
                if (clientX > EloffsetLeft && clientX < EloffsetLeft + elW && clientY > EloffsetTop && clientY < EloffsetTop + 100) {
                    //如果是头部在此就不做任何动作，以上有绑定dialogHeaderEl.onmousedown = moveDown;
                } else {
                    document.onmousemove = function(e) {
                        e.preventDefault(); // 移动时禁用默认事件
                        //左侧鼠标拖拽位置
                        if (clientX > EloffsetLeft && clientX < EloffsetLeft + 10) {
                            //往左拖拽
                            if (clientX > e.clientX) {
                                dragDom.style.width = elW + (clientX - e.clientX) * 2 + 'px';
                            }
                            //往右拖拽
                            if (clientX < e.clientX) {
                                if (dragDom.clientWidth < minWidth) {} else {
                                    dragDom.style.width = elW - (e.clientX - clientX) * 2 + 'px';
                                }
                            }
                        }
                        //右侧鼠标拖拽位置
                        if (clientX > EloffsetLeft + elW - 10 && clientX < EloffsetLeft + elW) {
                            //往左拖拽
                            if (clientX > e.clientX) {
                                if (dragDom.clientWidth < minWidth) {} else {
                                    dragDom.style.width = elW - (clientX - e.clientX) * 2 + 'px';
                                }
                            }
                            //往右拖拽
                            if (clientX < e.clientX) {
                                dragDom.style.width = elW + (e.clientX - clientX) * 2 + 'px';
                            }
                        }
                        //底部鼠标拖拽位置
                        if (ELscrollTop + clientY > EloffsetTop + elH - 20 && ELscrollTop + clientY < EloffsetTop + elH) {
                            //往上拖拽
                            if (clientY > e.clientY) {
                                if (dragDom.clientHeight < minHeight) {} else {
                                    dragDom.style.height = elH - (clientY - e.clientY) * 2 + 'px';
                                }
                            }
                            //往下拖拽
                            if (clientY < e.clientY) {
                                dragDom.style.height = elH + (e.clientY - clientY) * 2 + 'px';
                            }
                        }
                    };
                    //拉伸结束
                    document.onmouseup = function(e) {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                }
            }
        }
    }
})