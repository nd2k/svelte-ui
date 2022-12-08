export function outsideAction(element: HTMLElement, eventListener: string, callbackFunction: Function, selector: string) {
    function handleEvent(event: Event) {
        let target = event.target as Node;
        if (!element.contains(target)) {
            callbackFunction(selector);
        }
    }
    document.body.addEventListener(eventListener, handleEvent);
    return {
        update(newCallbackFunction: any) {
            callbackFunction = newCallbackFunction;
        },
        destroy() {
            document.removeEventListener(eventListener, handleEvent);
        }
    }
}

export function removeHideAction(element: HTMLElement, showEventListener: string) {
    function showAction() {
        let targetElement = element?.dataset.targetElement;
        if (document !== null && targetElement !== undefined) {           
            if (targetElement !== '') {
                removeHide(`[data-element-id=${targetElement}]`)
                element.setAttribute('activeClass', 'active');
            }
        }
    }   
    element.addEventListener(showEventListener, showAction);
    return () => {
        element.removeEventListener(showEventListener, showAction);
    }
}

export function removeHide(selector: string) {
    let nodeListElementId = document.body.querySelectorAll(selector);
    nodeListElementId.forEach(el => {        
        el.setAttribute('hide', '');
    })
}

export function addHide(selector: string) {    
    let nodeList = document.body.querySelectorAll(selector);
    nodeList.forEach(el => {
        el.setAttribute('hide', 'hide');
    })
}