import Link from "next/link";
import * as React from "react";
import Image from "next/image";

export async function Footer() {
    return (
        <div className="w-full border-t bg-background container">
            <div className="flex justify-between items-center">
                <div className="flex-shrink-0">
                    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
                        <Link href={"https://github.com/Raul-36"}>
                            <Image
                                height={500}
                                width={500}
                                src={`https://l0ukjseikguogzxj.public.blob.vercel-storage.com/test/Raul_36%20wojak_studio%20(6)-UQDFDZzsZ8Pi3xPRvIuhfsyZw83FGm.png`}
                                alt={"Raul_36"}
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div>
                        <Link href={"https://github.com/Raul-36"}>
                            <Image
                                height={250}
                                width={700}
                                src={"http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Raul-36&theme=github_dark"}
                                alt={"Raul_36 stat"}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href={"https://github.com/Raul-36"}>
                            <Image
                                height={250}
                                width={700}
                                src={"http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Raul-36&theme=github_dark"}
                                alt={"Raul_36 stat"}
                            />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}