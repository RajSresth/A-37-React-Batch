import React, { useEffect } from "react";

const ShopCardJs = () => {

  console.log("shopCardJs Render");


  useEffect(() => {
    console.log("useEffect js card")

    return () => console.log("cleanup js card");
  },[])

  return (
    <div className="shop-details">
      <h2>Welcome to Shop Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
        architecto laborum sequi esse incidunt quisquam consequatur nam ratione
        qui.
      </p>

      <p>
        Nemo illum architecto laborum sequi esse incidunt quisquam consequatur
        nam ratione qui.
      </p>

      <p>
        Nemo illum architecto laborum sequi esse incidunt quisquam consequatur
        nam ratione qui.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iusto quaerat dolorem, delectus quis dignissimos maxime debitis non
        tenetur culpa voluptatem eveniet quos atque doloremque nam ipsa,
        reprehenderit assumenda dolore voluptas ab. Fugit voluptates,
        perferendis a facilis pariatur porro? Eius distinctio quam ipsam id!
        Autem temporibus eos ratione possimus recusandae?
      </p>

      <h3>Last Para</h3>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ShopCardJs;
