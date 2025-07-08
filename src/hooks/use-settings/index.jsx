import { useLocalStorage } from "@mantine/hooks";

export const DEFAULT_SETTINGS = {
    "homebrew": true
};

export function useSettings() {
    return useLocalStorage({ key: 'settings', defaultValue: DEFAULT_SETTINGS });
}