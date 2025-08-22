import ProductLayout from "./ProductLayout";
import SellPreviewLayout from "./SellPreviewLayout";

export default function SellLayout() {

    return (
       <div
        style={{
            height: "100%",
            flexGrow: 1,
            display: "flex",
            backgroundColor: "ghostwhite",
            overflow: "hidden"
        }}
       >
            <div
                style={{
                    // flexGrow: 1
                }}
            >
                <ProductLayout />
            </div>
            <div
                style={{
                    flexGrow: 1,
                }}
            >
                <SellPreviewLayout />
            </div>
       </div>
    )

}