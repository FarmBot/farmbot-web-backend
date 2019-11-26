import { Color } from "farmbot/dist/corpus";

interface SFile { uuid: string; }

interface FolderUI {
  id: number;
  name: string;
  content: SFile[];
  color: Color;
  open?: boolean;
}

/** A top-level directory */
export interface FolderNodeInitial extends FolderUI {
  kind: "initial";
  children: (FolderNodeMedial | FolderNodeTerminal)[];
}

/** A mid-level directory. */
export interface FolderNodeMedial extends FolderUI {
  kind: "medial";
  children: FolderNodeTerminal[];
}

/** A leaf node on the directory tree.
 * Never has a child */
export interface FolderNodeTerminal extends FolderUI {
  kind: "terminal";
  children: [];
}

export type FolderUnion =
  | FolderNodeInitial
  | FolderNodeMedial
  | FolderNodeTerminal;

export interface RootFolderNode {
  folders: FolderNodeInitial[];
}

/** === THIS WILL LIVE ON THE API === */
export interface FolderNode {
  id: number;
  color: Color;
  parent_id?: number;
  name: string;
}