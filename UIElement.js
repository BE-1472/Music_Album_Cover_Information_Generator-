
class UIElement {

    int x;
    int y;

    Color color;
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        this.color(r, g, b);
    }
    construct(x, y) {
        this.x = x;
        this.y = y;
        this.color(0, 0, 0);
    }
    get_color_object() {
        return this.color;
    }
}