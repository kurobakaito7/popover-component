import {
    useInteractions,
    useFloating,
    useHover,
    useClick,
    useDismiss,
    offset,
    arrow,
    FloatingArrow,
    flip,
  } from '@floating-ui/react';
  import { useRef, useState } from 'react';
  import './App.css';
   
  export default function Test() {
    // useFloating 是用来给浮层确定位置的
    // useInteractions 是用来绑定交互事件的
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);
   
    const {refs, floatingStyles, context} = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: 'top',
      middleware: [
        // 偏移
        offset(10),
        // 箭头
        arrow({
          element: arrowRef
        }),
        // 翻转
        flip(),
      ]
    });
   
    // const hover = useHover(context);
    const click = useClick(context);
    // 点击其他位置，关闭浮层
    const dismiss = useDismiss(context);
  
    const { getReferenceProps, getFloatingProps } = useInteractions([
      // hover
      click,
      dismiss
    ]);
  
    return (
      <>
        <button ref={refs.setReference} {...getReferenceProps()}>
          hello
        </button>
        {
          isOpen && <div
              className="popover-floating"
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              kkkkk
              <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1}/>
            </div>
        }
      </>
    );
  }