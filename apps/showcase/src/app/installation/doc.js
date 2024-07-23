import ContextSection from "@/docs/installation/context";
import DownloadSection from "@/docs/installation/download";

const sections = [
    {
        id: 'download',
        label: 'Download',
        content: DownloadSection
    },
    {
        id: 'context',
        label: 'Context',
        content: ContextSection
    }
];

const doc = {
    title: 'Installation',
    description: 'PrimeReact is a rich set of open source UI components for React.',
    sections: sections
};

export default doc;
