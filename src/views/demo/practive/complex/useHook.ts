import { computed, unref } from 'vue';
import { useRouter } from 'vue-router';
import { useGo } from '@/hooks/web/usePage';

export function useHook() {
  const { currentRoute } = useRouter();
  const go = useGo();
  const query = computed(() => {
    return unref(currentRoute).query;
  });
  const goBack = () => {
    go({
      name: 'ComplexApplication',
    });
  };
  const goRoute = (params: any) => {
    go(params);
  };
  return {
    query,
    goBack,
    goRoute,
  };
}
