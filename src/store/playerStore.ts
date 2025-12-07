import { create } from "zustand";
import { type Playlist, type Song} from "@/lib/data.ts";

export interface CurrentMusic {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[];
}

export interface PlayerStore {
    isPlaying: boolean;
    currentMusic: CurrentMusic;
    volume: number;
    setVolume: (volume: number) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentMusic: (currentMusic: CurrentMusic) => void;
}


export const usePlayerStore = create<PlayerStore>((set: (arg0: { volume?: any; isPlaying?: any; currentMusic?: any; }) => void) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 0.1,
    setVolume: (volume: any) => set({ volume }),
    setIsPlaying: (isPlaying: any) => set({ isPlaying }),
    setCurrentMusic: (currentMusic: any) => {set({currentMusic})},
}));