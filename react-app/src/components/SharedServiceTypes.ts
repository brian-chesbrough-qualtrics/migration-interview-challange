export interface Note {
  id: string;
  text: string;
  createdAt: Date;
}

// Accessed via window.sharedNotesService
export interface SharedNotesService {
  getNotes(): Note[];
  addNote(text: string): void;
  deleteNote(id: string): void;
}

// Extend the Window interface
declare global {
  interface Window {
    sharedNotesService: SharedNotesService;
  }
} 