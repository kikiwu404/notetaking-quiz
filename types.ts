import React from 'react';

export enum NoteTakerType {
  Architect = 'architect',
  Gardener = 'gardener',
  Librarian = 'librarian',
}

export enum ToolKey {
  Notion = 'notion',
  Obsidian = 'obsidian',
  Heptabase = 'heptabase',
  AppleNotes = 'appleNotes',
  GoodNotes = 'goodNotes',
  Evernote = 'evernote'
}

export type ScoreKey = ToolKey | NoteTakerType;

export type Scores = {
  [key in ScoreKey]: number;
};

export interface Option {
  text: string;
  scores: Partial<Scores>;
}

export interface Question {
  text: string;
  options: Option[];
}

export interface NoteTaker {
    name: string;
    description: string;
}

export interface Tool {
  name: string;
  description: string;
  features: string[];
  logo: string;
  url: string;
  price: string;
}