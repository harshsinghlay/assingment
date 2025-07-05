import { aiFeatures, tools, type AiFeature } from '../constants/aiFeatures';
import AiFeatureCard from './common/AiCard';

function AIFeatures() {
    return (
        <section className="bg-gradient-to-b from-white via-orange-50 to-white flex flex-col lg:items-start lg:justify-between w-10/12 mx-auto gap-6 font-ruberoid my-20">
            <div className="w-full space-y-4 flex lg:flex-row flex-col justify-between lg:items-end">
                <div className="">
                    <p className="text-lg font-semibold text-[#100249] lg:mb-8">
                        AI-Powered Features
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-primary">
                        Smarter, Not harder
                    </h2>
                </div>
                <p className="text-black text-lg lg:text-base lg:max-w-lg p-1">
                    Test built-in AI drives personalized matchmaking, smart RSVP
                    nudges, schedule suggestions, and engagement recommendations
                    — with no manual input required.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
                {aiFeatures.map((feature: AiFeature) => (
                    <AiFeatureCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-8 lg:grid-cols-10 gap-x-4 gap-y-6 text-sm text-gray-800 mt-3">
                {tools.map((tool, i) => (
                    <p key={i} className="p-3 text-center">
                        {tool}
                    </p>
                ))}
            </div>

            <div className="w-full text-center text-lg font-semibold text-gray-800 mt-4">
                ...And 100+ More
            </div>
        </section>
    );
}

export default AIFeatures;
