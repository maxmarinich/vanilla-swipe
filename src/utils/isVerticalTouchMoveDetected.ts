export const isVerticalTouchMoveDetected = (deltaX: number, deltaY: number, gap = 32) => {
    const vertical = Math.abs(deltaY)
    const horizontal = Math.abs(deltaX)
    return vertical > horizontal && horizontal < gap
}
