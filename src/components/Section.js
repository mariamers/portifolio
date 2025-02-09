import React from 'react';

const Item = ({ type, children, title }) => {
    const renderType = () => {
        switch (type) {
            case "3x3":
                return (
                    <Section title={title}>
                        <div className="grid grid-cols-3 grid-rows-3 gap-4">
                            {children}
                        </div>
                    </Section>
                );
            case "hero":
                return (
                    <Section title={title}>
                        <div className="grid grid-cols-8 grid-rows-2 gap-4">
                            <div className="grid col-span-6 row-span-2">
                                {children[0]}
                            </div>
                            <div className="grid col-span-2 row-span-2 gap-4">
                                {children[1]}
                                {children[2]}
                            </div>
                        </div>
                    </Section>
                );
            case "row":
                return (
                    <Section title={title}>
                        <div className="flex flex-row gap-4 flex-wrap">
                            {children}
                        </div>
                    </Section>
                );
            case "dual":
                return (
                    <Section title={title}>
                       <div className="grid grid-cols-8 grid-rows-2 gap-4">
                            <div className="grid col-span-4 row-span-2">
                                {children[0]}
                            </div>
                            <div className="flex col-span-4 row-span-1 gap-4">
                                {children[1]}
                                {children[2]}
                            </div>
                            <div className='grid col-span-4 row-span-1 gap-4'> 
                            {children[3]}
                            </div>
                        </div>
                    </Section>
                );
            default:
                return <Section title={title}>{children}</Section>;
        }
    };

    return renderType();
};

const Section = ({ children, title }) => {
    return (
        <section className="mx-auto gap-4 p-4">
            {title && <h2 className="text-5xl font-bold py-12 capitalize">{title}</h2>}
            {children}
        </section>
    );
}

export default Item;
