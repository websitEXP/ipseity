import { useSeason, Season } from '@/context/season-context';
import springBg from '@/assets/spring-bg.jpg';
import summerBg from '@/assets/summer-bg.jpg';
import autumnBg from '@/assets/autumn-bg.jpg';
import winterBg from '@/assets/winter-bg.jpg';

const backgrounds: Record<Season, string> = {
  spring: springBg,
  summer: summerBg,
  autumn: autumnBg,
  winter: winterBg,
};

const Contact = () => {
  const { season } = useSeason();

  const links = [
    { label: 'Instagram', url: '#', icon: '✦' },
    { label: 'Twitter / X', url: '#', icon: '✦' },
    { label: 'Email', url: 'mailto:hello@onsferjani.com', icon: '✦' },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Season background */}
      <div className="fixed inset-0 -z-20">
        <img src={backgrounds[season]} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="pt-28 pb-16 px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto text-center">
          <div className="parchment rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="font-heading text-4xl md:text-5xl text-forest mb-2 font-light">
              Find Me
            </h1>
            <p className="font-body text-forest/50 italic mb-10">
              where the words wander
            </p>

            <div className="space-y-4">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  className="block font-heading text-lg tracking-wider text-forest/70 hover:text-rosy transition-colors duration-300 py-2 border-b border-forest/10 last:border-b-0"
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-forest/10">
              <p className="font-body text-sm text-forest/40 italic">
                "I'm just here to release some trapped words<br />between my ribcage."
              </p>
              <p className="signature text-rosy mt-3">— ons ferjani</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
