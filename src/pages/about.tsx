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

const About = () => {
  const { season } = useSeason();

  return (
    <main className="min-h-screen relative">
      {/* Season background */}
      <div className="fixed inset-0 -z-20">
        <img src={backgrounds[season]} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="pt-28 pb-16 px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="parchment rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="font-heading text-4xl md:text-5xl text-forest text-center mb-2 font-light">
              About
            </h1>
            <p className="signature text-xl text-rosy text-center mb-8">
              ons ferjani
            </p>

            <div className="space-y-4 font-body text-base md:text-lg text-forest/80 leading-relaxed">
              <p className="italic">
                suddenly i'm not a 10 years old distinguished writer, that thing grew more in me than i did myself.
              </p>
              <p>
                I'm just here to release some trapped words between my ribcage.
              </p>
              <p>
                Each poem is a journey, a reflection of seasons passed and feelings felt, capturing the essence of life's most poignant and fleeting moments.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-forest/10 text-center">
              <p className="font-body text-sm text-forest/40 italic">
                "somehow everything is poetic"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
