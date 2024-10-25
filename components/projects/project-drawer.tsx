import { getDictionary } from "@/dictionaries";
import { memo, useMemo, FC, ReactNode, useCallback } from "react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
} from "@/components/ui/drawer"
import ProjectDrawerButton from "./project-drawer-button";

interface ProjectDrawerProps {
    openState: boolean;
    setIsOpen: (flag: boolean) => void;
    children: ReactNode | ReactNode[]
}
  
const ProjectDrawer: FC<ProjectDrawerProps> = ({ openState, children, setIsOpen }: ProjectDrawerProps) => {
    const $t = getDictionary();
    const handleClose = useCallback(()=> {
        setIsOpen(false)
    }, [setIsOpen])

    // Memoized component
    const content = useMemo(() => (
        <Drawer open={openState} onOpenChange={setIsOpen}>
            <DrawerTitle className="sr-only">{$t.projects.heading}</DrawerTitle>
            <DrawerDescription className="sr-only">{$t.projects.description}</DrawerDescription>
            <DrawerContent className="min-h-full md:h-3/4">
                {children}
                <ProjectDrawerButton handleClick={handleClose}>{$t.projects.closeDemo}</ProjectDrawerButton>
            </DrawerContent>
        </Drawer>
    ), [$t, children, openState, setIsOpen, handleClose]);

    return (content);
};

export default memo(ProjectDrawer);