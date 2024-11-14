class ScrollDisplay{
    elem: HTMLElement | null = null;
    changePoint: number = 0;

    constructor(idName: string,changePoint: number = 0) {
        let elem = document.getElementById(idName);

        if (elem) {
            this.elem = elem;
        }

        this.changePoint = changePoint;
    }

    public eventAdd(pointAbove: (elem: HTMLElement) => void, pointBelow: (elem: HTMLElement) => void) {
        // イベントを追加する
        // HTML要素がnullの場合はイベントを追加しない
        let totop = this.elem;
        let changePoint = this.changePoint;

        if (totop) {
            // HTML要素があれば
            document.addEventListener("scroll", function () {
                if (window.scrollY > changePoint) {
                    // 指定したポイントよりも下なら
                    pointBelow(totop);
                } else {
                    // 指定したポイントよりも上なら
                    pointAbove(totop);
                }
            });
        }
    }

    public eventAddSimple(displayType: string, waitMillisecond: number = 1) {
        // イベントを追加する
        this.eventAdd(function (totop) {
            // 上なら非表示
            let totopStyle = window.getComputedStyle(totop);

            if (totopStyle.getPropertyValue("opacity") === "1" && totopStyle.getPropertyValue("display") === displayType) {
                totop.style.opacity = "0";

                setTimeout(function(){
                    totop.style.display = "none";
                },waitMillisecond);
            }
        }, function (totop) {
            // 下なら表示
            let totopStyle = window.getComputedStyle(totop);

            if(totopStyle.getPropertyValue("display") === "none"){
                totop.style.display = displayType;

                setTimeout(function(){
                    totop.style.opacity = "1";
                },1);
            }
        });
    }
}

export default ScrollDisplay;
