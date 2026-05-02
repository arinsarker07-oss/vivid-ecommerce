"use client";

import React from "react";

import { FaGithub, } from "react-icons/fa";
import Link from "next/link";
import { Button, Card, CardHeader, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-12">
            <Card className="max-w-[450px] w-full p-6 shadow-2xl border-none rounded-[2.5rem] bg-white">
                <CardHeader className="flex flex-col gap-2 items-center pb-8">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500 text-sm font-medium">Please enter your details to sign in</p>
                </CardHeader>

                <div className="flex flex-col gap-5">
                    <Form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col gap-2">
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
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
                                <Label>Password</Label>
                                <Input placeholder="Enter your password" />
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

                    <div className=" items-center my-3 gap-4">
                        <span className="text-gray-400 text-xl font-extrabold flex justify-center uppercase">Or Continue With</span>
                        <Separator variant="default" />
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Button className={"text-xl font-bold "} variant="outline"> Google <FcGoogle /> </Button>
                        <Button className={"text-xl font-bold"} variant="secondary">GitHub <FaGithub /></Button>
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