// Fix: Import React to resolve React.ComponentType
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bullets?: string[];
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  instructor: string;
  duration: string;
  imageUrl: string;
  bullets?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  author: string;
}

export interface LocalizedContent {
  [key: string]: any;
}

export enum Language {
  EN = 'en',
  RW = 'rw'
}