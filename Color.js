class Color {
    int r;
    int g;
    int b;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    set_r(r) {
        if(r >= 0 && r <= 255) {
            this.r = r;
        }
        // Value not in range
    }
    set_g(g) {
        if(g >= 0 && g <= 255) {
            this.g = g;
        }
        // Value not in range
    }
    set_b(b) {
        if(b >= 0 && b <= 255) {
            this.b = b;
        }
        // Value not in range
    }
    get_r() {
        return this.r;
    }
    get_g() {
        return this.g;
    }
    get_b() {
        return this.b;
    }

}