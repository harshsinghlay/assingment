type AiFeature = { title: string; description: string; icon: string };

import {Icon1 , Icon2 , Icon3, Icon4 , Icon5,  Icon6 , Icon7, Icon8} from "../assets/images"

const aiFeatures: AiFeature[] = [
    {
        title: 'Smart RSVP',
        description:
            'Learns attendee intent and behavior to optimize RSVP nudges and timing across email and WhatsApp.',
        icon: Icon1,
    },
    {
        title: 'AI Matchmaking',
        description:
            'Recommends people, sessions, and booths to attendees and exhibitors based on profile, goals, and past.',
        icon: Icon2,
    },
    {
        title: 'Agenda Personalization',
        description:
            'Builds customized session agendas based on interest tags, behavior, or AI-curated themes.',
        icon: Icon3,
    },
    {
        title: 'Live Engagement Nudges',
        description:
            'Sends automatic prompts to attendees for under-attended sessions, upcoming keynotes, or missed meetings.',
        icon: Icon4,
    },
    {
        title: 'Booth Intelligence',
        description:
            'Predicts lead quality and visitor traffic trends for exhibitors based on scanning, dwell time, and past data.',
        icon: Icon4,
    },
    {
        title: 'Smart Recommendations',
        description:
            'Suggests follow-up content, sessions-on-demand, or networking actions post-event.',
        icon: Icon5,
    },
    {
        title: 'Auto-Segmented Analytics',
        description:
            'Uses behavioral clustering to group attendees and exhibitors into high-engagement, passive, or churn-risk segments.',
        icon: Icon6,
    },
    {
        title: 'Intent-Based Lead Scoring',
        description:
            'Scores leads based on their interaction patterns, visit frequency, and content consumption during the event.',
        icon: Icon7,
    },
    {
        title: 'Intent-Based Lead Scoring',
        description:
            'Scores leads based on their interaction patterns, visit frequency, and content consumption during the event.',
        icon: Icon8,
    },
];

const tools = [
    'Smart RSVP Tracking',
    'No-Show Prediction',
    'Timing-Optimized Invite Delivery',
    'Auto-Tagging Of Attendees',
    'Session Interest Detection',
    'Exhibitor Onboarding Nudges',
    'Best-Time Messaging Suggestions',
    'Waitlist Automation',
    'Dynamic Pricing Assist',
    'Duplicate Registration Detection',
    'AI-Built Personal Agendas',
    'Session Recommendations',
    'Push Notification Timing',
    'Smart Booth Matching',
    'Live Crowd Alerts',
    'Footfall Heat Maps',
    'Top-Level Alerts For Exhibitors',
    'AI Networking Matches',
    'Engagement Drop-Off Detection',
    'Behavior-Based Lead Scoring',
    'Auto-Segmented Attendee Groups',
    'Personalized Follow-Up Suggestions',
    'Smart Content Recommendations',
    'Lead Reactivation Scoring',
    'Auto-Generated Performance Reports',
    'Session Rating Prediction',
    'Feedback Sentiment Analysis',
    'Drop-Off Journey Mapping',
    'Event Quality Summary',
    'Sponsor Performance Insights',
    'VIP Attendee Detection',
    'Booth Placement Suggestions',
    'Speaker-Topic Matching',
    'Message Auto-Translation',
    'Smart Survey Generator',
    'Agenda Topic Clustering',
    'Session Delay Alerts',
    'Sponsor Targeting Tips',
    'Auto Event Summaries',
    'Session Mood Heatmaps',
];

export { aiFeatures, tools, type AiFeature };
