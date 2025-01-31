
// import React, { createContext, useState } from "react";
// import { Launch } from "../types/Month";
// import { useMonth } from "../hooks/useMonth";

// interface CreateContextProps {
//     launchs: any;
// }

// interface LaunchsProviderProps {
//     children: React.ReactNode
// }

// const LaunchsContext = createContext({} as CreateContextProps);

// function LaunchsProvider({ children }: LaunchsProviderProps) {

//     const [launchs, setLaunchs] = useState<Launch[]>([]);

//     const { months }  = useMonth();
    
//     async function getLaunchs() {
//         const months = await monthsData.getMonths();
//         for (const month of months) {
//             const launchsFiltered = month.launchs.filter((launch: Launch) => launch.idUserSystem === user.userId);
//             setLaunchs([...launchs, launchsFiltered]);
//         }
//     }

//     useEffect(() => {
//         getLaunchs();
//     }, []);

//     return (
//         <LaunchsContext.Provider value={{
//             launchs
//         }}>
//             {children}
//         </LaunchsContext.Provider>
//     );

// }

// export {
//     LaunchsContext,
//     LaunchsProvider
// }
