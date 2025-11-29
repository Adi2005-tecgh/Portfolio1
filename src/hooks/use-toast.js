export function useToast() {
  return {
    toast: ({ title, description }) => {
      alert((title || 'Notice') + '\n\n' + (description || ''));
    }
  };
}
