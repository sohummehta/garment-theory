import { Metadata } from 'next';
import TryOn from '@/components/tryon';

export const metadata: Metadata = {
  title: 'Virtual Try-On | Garment Theory',
  description: 'Experience clothes before you buy them with our AI-powered virtual try-on technology.',
};

export default function TryOnPage() {
  return <TryOn />;
}
