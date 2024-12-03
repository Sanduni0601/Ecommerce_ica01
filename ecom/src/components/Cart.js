import '../assets/CSS/layout.css'
export default function Cart({cartItems}) {
    const grandTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity}</td>
                        </tr>
                      ))
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>Grand Total</td>
                    <td>{grandTotal}</td>
                </tr>
            </table>
           
        </div>
    );
}