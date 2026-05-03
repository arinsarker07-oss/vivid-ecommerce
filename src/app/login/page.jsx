"use client";

import React, { useState } from "react";

import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa";
import Link from "next/link";
import { Button, Card, CardHeader, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    console.log(isVisible);


    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ email, password });

        const { data, error } = await authClient.signIn.email({
            email, password,
            callbackURL: "/"
        });
        console.log({ data, error });
        if (!error) {
            toast.success("Login successfully! 🎉", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.error("Give valid Id", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

            const GoogleSignin = async () => {
            await authClient.signIn.social({
                provider: "google",
            });
        }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-12">
            <Card className="max-w-[450px] w-full p-6 shadow-2xl border-none rounded-[2.5rem] bg-white">
                <CardHeader className="flex flex-col gap-2 items-center pb-8">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500 text-sm font-medium">Please enter your details to sign in</p>
                </CardHeader>

                <div className="flex flex-col gap-5">
                    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label className="text-black">Email</Label>
                            <Input  placeholder="Enter your email" />
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col gap-2">
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type={isVisible ? "password" : "text"}
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }

                                    return null;
                                }}
                            >
                                <Label className="text-black">Password</Label>
                                <Input placeholder="Enter your password" />
                                <button className="focus:outline-none " type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <FaEyeSlash className="dark:text-black text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <FaEye className="dark:text-black text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                                <Description>
                                    Must be at least 8 characters and 1 number
                                </Description>
                                <FieldError />
                            </TextField>
                            <div className="flex justify-end">
                                <Link href="#" className="text-xs font-bold text-blue-600 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="bg-blue-600 font-bold text-lg h-12 w-full rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
                        >
                            Login
                        </Button>
                    </Form>

                    <div className=" items-center my-2 gap-4">
                        <span className="text-gray-400 font-extrabold flex justify-center uppercase">Or Continue With</span>
                        <Separator variant="default" />
                    </div>

                    <div className="flex justify-center">
                        <Button onClick={GoogleSignin} className={"text-xl text-black font-bold w-full h-12 hover:bg-gray-300"} variant="outline"> Google <FcGoogle /> </Button>

                    </div>

                    <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-blue-600 font-bold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;