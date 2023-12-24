import type { NextPage } from 'next';

import { useToastStore } from '@/src/stores/toastStore';

const HomePage: NextPage = () => {
  const showToast = useToastStore((state) => state.showToast);

  return (
    <div>
      <button
        type="button"
        onClick={() => showToast({ message: '토스트 노출' })}
      >
        토스트 노출
      </button>
    </div>
  );
};

export default HomePage;
