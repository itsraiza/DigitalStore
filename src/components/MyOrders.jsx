const MyOrders = () => {
    const orders = [
  { id: '001', date: '20/05/2025', status: 'Entregue', total: 'R$ 250,00' },
  { id: '002', date: '10/05/2025', status: 'Em transporte', total: 'R$ 150,00' },
  { id: '003', date: '05/05/2025', status: 'Cancelado', total: 'R$ 99,00' },
];
    return ( 
        <>
            <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meus Pedidos</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-xl p-4 hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Pedido #{order.id}</p>
                <p className="text-sm text-gray-500">Data: {order.date}</p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${order.status === 'Cancelado' ? 'text-red-500' : order.status === 'Entregue' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {order.status}
                </p>
                <p className="text-lg font-bold">{order.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
     );
}
 
export default MyOrders;