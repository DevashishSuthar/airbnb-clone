import { Fragment } from 'react';

interface DescriptionBreakerProps {
    content: string;
}

const DescriptionBreaker: React.FC<DescriptionBreakerProps> = ({ content }) => {
    return (
        <>
            {content.split('\n').map((line, lineIndex) => (
                <p key={lineIndex}>
                    {line.split(/\*\*(.*?)\*\*/).map((part, index) => {
                        if (index % 2 === 1) {
                            return <strong key={index}>{part}</strong>;
                        }
                        return (
                            <Fragment key={index}>
                                {part}
                                <br />
                            </Fragment>
                        );
                    })}
                </p>
            ))}
        </>
    );
};

export default DescriptionBreaker;