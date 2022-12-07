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

export function toggleHideAction(element: HTMLElement, showEventListener: string) {
    function showAction() {
        let targetElement = element?.dataset.targetElement;
        if (document !== null && targetElement !== undefined) {           
            if (targetElement !== '') {
                toggleHide(`[data-element-id=${targetElement}]`)
            }
        }
    }   
    element.addEventListener(showEventListener, showAction);
    return () => {
        element.removeEventListener(showEventListener, showAction);
    }
}

export function toggleHide(selector: string) {
    let nodeListElementId = document.body.querySelectorAll(selector);
    let nodeListLi = document.body.querySelectorAll('li');
    console.log(nodeListLi);
    
    nodeListElementId.forEach(el => {
        el.classList.toggle('hide');
    })
    nodeListLi.forEach(el => {
        console.log(el.firstChild);
        
    })
}

export function addHide(selector: string) {    
    let nodeList = document.body.querySelectorAll(selector);
    nodeList.forEach(el => {
        el.classList.add('hide');
        el.parentElement?.classList.remove('active');
    })
}