import { getDictionary } from '@/lib/dictionaries'
import { DemoOne } from "@/components/ui/demo";
import { Locale } from '@/middleware'

// Force dynamic rendering to ensure the page always runs on the server
export const dynamic = 'force-dynamic';

export default async function Home({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  
  return <DemoOne dict={dict} locale={locale} />;
}
