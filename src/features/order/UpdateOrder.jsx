import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { toast } from 'react-hot-toast';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary"> Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } pointer-events-auto	 flex w-full max-w-md rounded-lg border border-yellow-400 bg-yellow-100 shadow-lg ring-1 ring-black ring-opacity-5`}
    >
      <div className="w-0 flex-1 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-md font-medium text-gray-900">
              🎉 Your will get your order sooner than before !
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-stone-600 hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Ok
        </button>
      </div>
    </div>
  ));
  return null;
}
