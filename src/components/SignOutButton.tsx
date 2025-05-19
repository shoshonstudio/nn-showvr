"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2, LogOut } from "lucide-react";

export default function SignoutButton() {
	const router = useRouter();
	const [pending, setPending] = useState(false);

	const handleSignOut = async () => {
		try {
			setPending(true);
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						// router.push("/");
						router.refresh();
					},
				},
			});
		} catch (error) {
			console.error("Error signing out:", error);
		} finally {
			setPending(false);
		}
	};

	return (
		<Button className="flex w-full justify-between cursor items-center p-0" variant="ghost" disabled={pending} onClick={handleSignOut}>
			Sign Out {pending ? <Loader2 className='animate-spin' /> : <LogOut className="w-4 h-4" />}
		</Button>
	);
}