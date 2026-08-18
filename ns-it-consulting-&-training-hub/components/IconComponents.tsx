
import React from 'react';
import { 
  Code, 
  Megaphone, 
  Sparkles, 
  Briefcase, 
  ArrowRight, 
  MessageSquare, 
  X, 
  Send, 
  User, 
  Globe 
} from 'lucide-react';

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Code className={className} />
);

export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Megaphone className={className} />
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Sparkles className={className} />
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Briefcase className={className} />
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <ArrowRight className={className} />
);

export const ChatBubbleLeftRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <MessageSquare className={className} />
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <X className={className} />
);

export const PaperAirplaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Send className={className} />
);

export const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <User className={className} />
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Globe className={className} />
);

