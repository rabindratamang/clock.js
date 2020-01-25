const styleElement = (elem, style) => {
    let styleKey = style && Object.keys(style);
    if (styleKey && styleKey.length) {
      styleKey.forEach(function (key) {
        elem.style[key] = style[key];
      })
    }
  }

  const addAttributes = (elem, attrs) => {
    let attrKeys = attrs && Object.keys(attrs);
    if (attrKeys && attrKeys.length) {
      attrKeys.forEach(key => {
        elem.setAttribute(key, attrs[key]);
      })
    }
  }

  const appendElems = (parentElem, childElem) => {
      if(parentElem && (childElem.length || childElem )){
          if(Array.isArray(childElem)){
            childElem.forEach(elem=>{
                parentElem.appendChild(elem);
            })
          }else{
            parentElem.appendChild(childElem);
          }
      }

      return true;
  }

  const createElement = (elemType="div",attr) => {
    let elem = document.createElement(elemType);
    attr && addAttributes(elem, attr);
    return elem;
  }