import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import {DataProps} from "@/types";

const Information = ({information}: Pick<DataProps, "information">) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="relative flex shrink gap-8 items-start" style={{marginBottom: "5%"}}>
                    <div className="hidden md:block relative w-40 shrink-0 h-40" style={{
                        width: "18%",
                        marginRight: "5%",
                        float: "left"
                    }}>
                        <img src={information.imgSrc} style={{
                            objectFit: "cover",
                            objectPosition: "top"
                        }}></img>
                    </div>
                    <div className="flex flex-col w-full">
                        <h1 className="leading-[1.15]">
                            안녕하세요,
                            <br/> Back-end 개발자{" "}
                            <br/>
                            <span className="text-PRIMARY font-semibold">{information.name}</span>
                            입니다.
                        </h1>
                        <div className="hidden md:flex flex-col gap-4"></div>
                        <div className="flex px-4 gap-1">
                            {information.contact.map((contact) => (
                                <ContactItem
                                    key={contact.id}
                                    className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                                    {...contact}
                                >
                                    {contact.name}
                                </ContactItem>
                            ))}
                        </div>
                    </div>
                </div>
                <Introduce markdown={information.markdown}/>
            </div>
        </div>
    );
};

export default Information;
