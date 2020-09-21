let currentDroppable = null;

postit.onmousedown = function (event) {

    document.body.appendChild(postit);

    let shiftX = event.clientX - postit.getBoundingClientRect().left;
    let shiftY = event.clientY - postit.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        postit.style.left = pageX - shiftX + 'px';
        postit.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        postit.hidden = true
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        postit.hidden = false

        if (!elemBelow) return

        let droppableBelow = elemBelow.closest('.droppable')
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable)
            }
          currentDroppable = droppableBelow

            if (currentDroppable) {
                enterDroppable(currentDroppable)
            }
        }

    }

    document.addEventListener('mousemove', onMouseMove);

    postit.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        postit.onmouseup = null;
        if (currentDroppable != null) location.href = "https://clementbleupays.jimdofree.com/bed"
    };

};

function enterDroppable(elem) {
    elem.style.border = 'inset';
    elem.style.background = 'rgba(125,125,125,0.4)';
    elem.style.transform = 'skew(20deg)';
}

function leaveDroppable(elem) {
    elem.style.border = '';
    elem.style.background = '';
    elem.style.transform = '';
}

postit.ondragstart = function () {
    return false;
};
