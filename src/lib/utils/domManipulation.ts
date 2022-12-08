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

export function hideElement(selector: string) {
    let elementIdNode = document.body.querySelectorAll(`.nav-link[data-element-id=${selector}]`);
    let element = document.body.querySelector(`.nav-link[data-target-element=${selector}]`)
    elementIdNode.forEach(el => {
        el.classList.add('hide');
    })
    element?.classList.remove('active');
}

export function showElement(selector: string) {
    let elementIdNode = document.body.querySelectorAll(selector);
    elementIdNode.forEach(el => {
        el.classList.remove('hide');
    })
}

export function showElementAction(element: HTMLElement, eventListener: string) {
    let targetElement = element?.dataset.targetElement;
    element.addEventListener(eventListener, () => {
        if (targetElement !== '') {
            showElement(`[data-element-id=${targetElement}]`)
            element.classList.add('active');
        }
        
    })
}